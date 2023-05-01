import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { Frame3Component } from 'src/app/controls/frame3.component';
import { HomeService, TabDescriptor } from 'src/app/home.service';
import { Game } from 'src/app/modelp/models';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-game-tab',
  standalone: true,
  imports: [CommonModule, FormsModule, MatTabsModule, Frame3Component],
  template: `
    <app-frame3>
    <h1>{{game?.Name}}</h1>

    <h2>Characters</h2>

    <div class="bottom-buttons">
        <button class="button" (click)="deactivateGame()">Deactivate Game</button>
        <button class="button" (click)="deactivatePlayer()">Deactivate Player</button>
        <button class="button" (click)="createNewCharacter()">Create New Character</button>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        padding: 1em;
      }
    `
  ]
})
export class GameTabComponent {
  game : Game | undefined
  constructor(
    private server : ServerService, 
    private home : HomeService
  ) {
    this.game = server.Game
  }

  deactivateGame() {
    this.server.SetActiveGame("")
  }

  deactivatePlayer() {
    localStorage.removeItem("last-player")
    localStorage.removeItem("last-player-gm")
    localStorage.removeItem("last-game")
    this.server.Player = undefined
  }

  createNewCharacter() {
    const tab : TabDescriptor = {
      type: "character", 
      imageType: 'svg',
      image: "new", 
      id: "new-character", 
      name: "New Character"
    }

    this.home.Open(tab)
  }
}
