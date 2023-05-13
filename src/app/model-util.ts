import { Character } from "./modelp/models"


export class ModelUtil {
static NewCharacter() {
    const item : Character = {
        ID: "",
        Name: "",
        Metadata: undefined,
        Options: undefined,
        Attributes: undefined,
        Health: undefined,
        Skills: [],
        Weapons: [],
        Armors: [],
        Affinities: [],
        Orbs: [],
        ActionCount: 0,
        DefensiveReactions: 0,
        ManualModifications: [],
        ManualRoll: false,
        Token: ""
    }

    item.Attributes = {
      BOD: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      ESS: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      INT: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      ATTR: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      WILL: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      VIT: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      TECH: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      REF: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      PER: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      LUCK: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      EMP: { RawValue: 1, SetValue: 1, CalcValue: 1 },
      
      Mana: { SetValue: 1, MaxValue: 1, RegenPerMinute: 0, RegenPerRound: 0 },
      Stamina: { SetValue: 1, MaxValue: 1, RegenPerMinute: 0, RegenPerRound: 0 },
      Initiative: { Value: 1 },
      Awarness: { Value: 1 }
    }
  
    return item
  }

}