import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';
import { Armor, Character, ErrorResponse, Fp2Message, Game, GetActiveGameResponse, IDName, Model, ModelType, Orb, Picture, Player, RefArmor, RefGameTerm, RefOrb, RefSkill, RefWeapon, UpdateType, Weapon } from './modelp/models';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  public Game : Game | undefined
  public Player : Player | undefined
  public PlayerList : Player[] | undefined

  socket : WebSocket | undefined
  waitingOn : Map<string, Subject<Fp2Message>> = new Map()
  allMessages$ = new Subject<Fp2Message>()
  status$ = new BehaviorSubject<'Initializing' | 'Connected' | 'Trying' | 'Disconnected'>('Initializing')

  readonly Games = new ModelCrud<Game>(this, ModelType.ModelType_Game)
  // readonly Games = new ModelCrud<Game>(this, ModelType.ModelType_Armor)
  readonly Characters = new ModelCrud<Character>(this, ModelType.ModelType_Character)
  // readonly Games = new ModelCrud<Game>(this, ModelType.ModelType_Orb)
  readonly Players = new ModelCrud<Player>(this, ModelType.ModelType_Player)
  readonly RefArmor = new ModelCrud<RefArmor>(this, ModelType.ModelType_RefArmor)
  readonly RefGameTerms = new ModelCrud<RefGameTerm>(this, ModelType.ModelType_RefGameTerm)
  readonly RefOrbs = new ModelCrud<RefOrb>(this, ModelType.ModelType_RefOrb)
  readonly RefSkills = new ModelCrud<RefSkill>(this, ModelType.ModelType_RefSkill)
  readonly RefWeapons = new ModelCrud<RefWeapon>(this, ModelType.ModelType_RefWeapon)
  // readonly Games = new ModelCrud<Game>(this, ModelType.ModelType_Weapon)

  constructor(
    private router : Router

  ) { 
    this.allMessages$.subscribe({
      next: msg => {
        this.reactToMessage(msg)
      }
    })
    this.connect()
  }

  private onOpen(ev : Event) {
    this.status$.next('Connected')

    this.GetActiveGame()
  }

  private async onMessage(ev : MessageEvent) {
    let data : Uint8Array = ev.data
    if(ev.data instanceof ArrayBuffer ){
      var buffer = ev.data;
      console.log("Received arraybuffer");
      data = new Uint8Array(ev.data);
    }
    if(ev.data instanceof Blob ){
      var blob = ev.data;
      console.log("Got Blob");
      const buffer = await ev.data.arrayBuffer()
      data = new Uint8Array(buffer)
    }
    if (!data) {
      return 
    }

    // decode
    const  msg = Fp2Message.decode(data)
    
    // Handle the Send and AWait
    if (msg.RespondingToID) {
      const sub = this.waitingOn.get(msg.RespondingToID)
      if (sub) {
        sub.next(msg)
        sub.complete()
        this.waitingOn.delete(msg.RespondingToID)
      }
    }

    // Send to everyone
    this.allMessages$.next(msg)
  }

  private onClose(event : CloseEvent) {
    this.status$.next('Disconnected')

    if (event.wasClean) {
      alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      alert('[close] Connection died');
    }
    console.error("SOCKET CLOSED: ", event)
  }

  private onError(ev : Event) {
    console.error("SOCKET ERROR: ", ev)
  }

  connect() {
    this.status$.next('Trying')
    const host = location.hostname

    const connectTo = `ws://${host}:8080/ws`
    let socket = new WebSocket(connectTo);
    socket.binaryType = "arraybuffer"
    // let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
    socket.onopen = (e) => this.onOpen(e)
    socket.onmessage = (e) => this.onMessage(e)
    socket.onclose = (e) => this.onClose(e)
    socket.onerror = (e) => this.onError(e)
    this.socket = socket
  }

  private encode(msg : Fp2Message) : Uint8Array {
      const out = Fp2Message.encode(msg).finish()
      return out
  }

  public SendAndWait(msg : Fp2Message) : Observable<Fp2Message> {
    const sub = new Subject<Fp2Message>
    this.waitingOn.set(msg.MessageID, sub)
    this.Send(msg)
    return sub
  }

  public Send(msg : Fp2Message)  {
    if (!msg.MessageID) {
      msg.MessageID = uuidv4() 
    }

    const blob = this.encode(msg)
    this.socket?.send(blob)
  }

  NewMessage() : Fp2Message {
    const msg : Fp2Message = {
      MessageID: uuidv4(),
      RespondingToID: "",
      Sender: "",
      ErrorResponse: undefined,
      Attack: undefined,
      AttackResult: undefined,
      DefenseChallenge: undefined,
      DefenseChallengeResponse: undefined,
      UpdateRequest: undefined,
      Chat: undefined,
      ListGamesRequest: undefined,
      ListGamesResponse: undefined,
      GetActiveGameRequest: undefined,
      GetActiveGameResponse: undefined,
      ModelChangedEvent: undefined,
      GetRequest: undefined,
      GetResponse: undefined,
      GetAllRequest: undefined,
      GetAllResponse: undefined,
      ListRequest: undefined,
      ListResponse: undefined,
      BatchUpdateRequest: undefined,
      DiceRollBroadcast: undefined,
      DiceRollResponse: undefined,
      SetActiveGameRequest: undefined,
      GetPictureRequest: undefined,
      GetPictureResponse: undefined
    }
    return msg
  }

  SavePicture(id : string, mt : ModelType, data : string, tag : string = "picture") {
    const msg = this.NewMessage()

    const model : Model  = {
      Character: undefined,
      Weapon: undefined,
      Orb: undefined,
      Armor: undefined,
      Game: undefined,
      Picture: {
        ID: id,
        Type: mt,
        GameID :"", 
        Tag: tag, 
        Data: data
      },
      Player: undefined,
      RefArmor: undefined,
      RefGameTerm: undefined,
      RefOrb: undefined,
      RefSkill: undefined,
      RefWeapon: undefined
    }

    msg.UpdateRequest = {
      Type: UpdateType.UT_Save,
      UpdateReason: 0,
      Model: model
    }
    this.Send(msg)
  }

  GetPicture(id : string, mt : ModelType, tag : string = "picture") : Observable<Picture | undefined | ErrorResponse> {
    const msg = this.NewMessage()
    msg.GetPictureRequest = {
      ID: id, 
      Type: mt, 
      Tag: tag,
      GameID: this.Game?.ID ||""
    }
    return this.SendAndWait(msg).pipe(
      map( msg => {
        if (msg.ErrorResponse) {
          return msg.ErrorResponse
        }
        if (msg.GetPictureResponse) {
          return msg.GetPictureResponse.Picture
        }
        return undefined
      })
    )
  }

  GetActiveGame() : Observable<GetActiveGameResponse | undefined> {
    const msg = this.NewMessage()
    msg.GetActiveGameRequest = {}

    return this.SendAndWait(msg).pipe(
      map( msg => msg.GetActiveGameResponse)
    )
  }

  SetActiveGame(id : string) {
    const msg = this.NewMessage()
    msg.SetActiveGameRequest = {
      ID: id
    }
    this.Send(msg)
  }
 
  // Reactions

  private reactToMessage(msg : Fp2Message) {
    if (msg.GetActiveGameResponse) {
      this.onActiveGameResponse(msg.GetActiveGameResponse)
    }

    

  }

  private onActiveGameResponse(msg : GetActiveGameResponse) {
    const game = msg.Game
    this.Game = game
    this.PlayerList = msg.Players
  } 

}

class ModelCrud<T> {
  constructor(
    private svc : ServerService,
    private modelType : ModelType) {
  }

  Delete(item : T) {
    const msg = this.svc.NewMessage()
    msg.UpdateRequest = {
      Type: UpdateType.UT_Delete, 
      Model: this.ToModel(item), 
      UpdateReason: 0
    }
    this.svc.Send(msg)
  }

  Save(item : T, updateReason : string = "User Change" ){
    const msg = this.svc.NewMessage()
    msg.UpdateRequest = {
      Type: UpdateType.UT_Save, 
      Model: this.ToModel(item), 
      UpdateReason: 0
    }
    this.svc.Send(msg)
  }

  async GetNow(id  : string) : Promise<T | undefined | ErrorResponse> {
    return await firstValueFrom(this.Get(id))
  }

  Get(id  : string) : Observable<T | ErrorResponse | undefined> {
    const msg = this.svc.NewMessage()
    msg.GetRequest = {
      ID: id,
      Type: this.modelType
    }
    return this.svc.SendAndWait(msg).pipe(
      map(rtn => {
        if (rtn.ErrorResponse) {
          return rtn.ErrorResponse
        }
        const resp = rtn.GetResponse
        if (!resp) {
          return undefined
        }
        if (this.modelType != resp.Type) {
          return undefined
        }
        const model = resp.Model
        if (!model) {
          return undefined
        }        
        return this.FromModel(model)
      })
    )
  }
  
  GetAll() : Observable<T[] | ErrorResponse | undefined> {
    const msg = this.svc.NewMessage()
    msg.GetAllRequest = {
      Type: this.modelType
    }
    return this.svc.SendAndWait(msg).pipe(
      map(rtn => {
        if (rtn.ErrorResponse) {
          return rtn.ErrorResponse
        }
        const resp = rtn.GetAllResponse
        if (!resp) {
          return undefined
        }
        if (this.modelType != resp.Type) {
          return undefined
        }
        const models = resp.Items
        if (!models) {
          return undefined
        }        

        const items : T[] = []
        for (const m of models) {
          const to = this.FromModel(m)
          if (to) {
            items.push(to)
          }
        }
        return items
      })
    )
  }

  List(filter : string) : Observable<IDName[] | ErrorResponse> {
    const msg = this.svc.NewMessage()
    msg.ListRequest = {
      Type: this.modelType,
      filter: filter
    }
    return this.svc.SendAndWait(msg).pipe(
      map( m => {
        if (m.ErrorResponse) {
          return m.ErrorResponse
        }
        const resp = m.ListResponse
        if (!resp) {
          return []
        }
        return resp.Items
      })
    )
  }

  ToModel(item : T) : Model {
    const model : Model  = {
      Character: undefined,
      Weapon: undefined,
      Orb: undefined,
      Armor: undefined,
      Game: undefined,
      Picture: undefined,
      Player: undefined,
      RefArmor: undefined,
      RefGameTerm: undefined,
      RefOrb: undefined,
      RefSkill: undefined,
      RefWeapon: undefined
    }
    switch (this.modelType) {
      case ModelType.ModelType_Armor: model.Armor = <Armor> item; break;
      case ModelType.ModelType_Character: model.Character = <Character> item; break;
      case ModelType.ModelType_Game: model.Game = <Game> item; break;
      case ModelType.ModelType_Orb: model.Orb = <Orb> item; break;
      case ModelType.ModelType_Player: model.Player = <Player> item; break;
      case ModelType.ModelType_Picture: model.Picture = <Picture> item; break;
      case ModelType.ModelType_RefArmor: model.RefArmor = <RefArmor> item; break;
      case ModelType.ModelType_RefGameTerm: model.RefGameTerm = <RefGameTerm> item; break;
      case ModelType.ModelType_RefOrb: model.RefOrb = <RefOrb> item; break;
      case ModelType.ModelType_RefSkill: model.RefSkill = <RefSkill> item; break;
      case ModelType.ModelType_RefWeapon: model.RefWeapon = <RefWeapon> item; break;
      case ModelType.ModelType_Weapon: model.Weapon = <Weapon> item; break;
      case ModelType.ModelType_Unkown:   
      default:
        console.log("Error -- BAD MODEL TYPE")
    }
    return model
  }

  FromModel(model : Model) : T | undefined {
    switch (this.modelType) {
      case ModelType.ModelType_Armor: return <T> model.Armor
      case ModelType.ModelType_Character: return <T> model.Character
      case ModelType.ModelType_Game: return <T> model.Game
      case ModelType.ModelType_Orb: return <T> model.Orb
      case ModelType.ModelType_Player: return <T> model.Player
      case ModelType.ModelType_RefArmor: return <T> model.RefArmor
      case ModelType.ModelType_RefGameTerm: return <T> model.RefGameTerm
      case ModelType.ModelType_RefOrb: return <T> model.RefOrb
      case ModelType.ModelType_RefSkill: return <T> model.RefSkill
      case ModelType.ModelType_RefWeapon: return <T> model.RefWeapon
      case ModelType.ModelType_Weapon: return <T> model.Weapon
      case ModelType.ModelType_Unkown:   
      default:
        return undefined
    }
  }
}

export function isErrorResponse(obj : any) : obj is ErrorResponse {
    return Object.hasOwnProperty("Error") &&  Object.hasOwnProperty("ErrorCode") 
} 
