import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fp2web';

  stage : 'not-connected' | 'connected-no-game' | 'connected-no-player' | 'connected' = 'not-connected'
  disconnected : boolean = false

  // Stages
  // 1 - Not Connected              - Show Connecting Screen
  // 2 - Connected, No Active Game  - Show Choose Games
  // 3 - Connected, No Player       - Show Choose Player
  // 4 - Connected, Game & Player   - Show Home
  // 5 - Disconnected               - Show "Disconnected" Overlay 

  constructor(
    private server : ServerService,
    private router : Router
  ) {

    // Server connection being established
    server.status$.subscribe({
      next: status => {
        switch (status) {
          // When initializing just show a message
          case 'Initializing':
            break;
          // When connected 
          case 'Connected' :
            this.handleConnected()
            break
          case 'Disconnected' :
            this.disconnected = true
            break;
          case 'Trying' : 
          break
        }
      }
    })

    server.allMessages$.subscribe({
      next: msg => {
        if (msg.ErrorResponse) {
          // Show Error
          return
        }

        if (msg.GetActiveGameResponse) {
          this.handleConnected()
        }
      }
    })

  }

  handleConnected() {
      // Load the last game and player
      const lastGame = localStorage.getItem("last-game")
      const lastPlayer = localStorage.getItem("last-player")
      const lastPlayerGM = localStorage.getItem("last-player-gm")

      if (!this.server.Game) {
        this.stage = 'connected-no-game'
        return
      }

      if (!this.server.PlayerList) {
        return
      }

      // check if the player is the current player
      if (this.server.Player) {
        const found = this.server.PlayerList.find(p => p.id == this.server.Player?.id)
        if (found) {
          this.stage = 'connected'
        }
      }

      if (lastGame == this.server.Game.ID && lastPlayer) {
        // const found = this.server.PlayerList.find(p => p.id == lastPlayer)
        // if (found) {
          const isGm = lastPlayerGM == "true"
          this.server.Player = {
            name : lastPlayer, 
            id: lastPlayer, 
            GM: isGm
          }
          this.stage = 'connected'
          return
        // }
      }

      this.stage = 'connected-no-player'
  }

}
