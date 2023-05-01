import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Frame3Component } from 'src/app/controls/frame3.component';
import { LinedSpacerComponent } from 'src/app/controls/lined-spacer.component';
import { FocusSelectDirective } from 'src/app/directives/focus-select.directive';
import { Game } from 'src/app/modelp/models';
import { ServerService, isErrorResponse } from 'src/app/server.service';

@Component({
  selector: 'app-choose-game',
  standalone: true,
  imports: [CommonModule, LinedSpacerComponent, Frame3Component, FormsModule, FocusSelectDirective],
  template: `
  <app-frame3 class="centered">
  <ng-container *ngIf="newGame">
    <h1 class="title">New Game</h1>
    <hr />
    <div class="form">
      <label>Name</label>
      <input focus-select type="text" [(ngModel)]="newGame.Name">
      <label>ID</label>
      <input focus-select type="text" [(ngModel)]="newGame.ID">
    </div>
    <div class="bottom-buttons">
      <button class="secondary" (click)="newGame = undefined">Cancel</button>
      <button class="button" (click)="saveNewGame()">Save</button>
    </div>
  </ng-container>
  <ng-container *ngIf="!newGame">
    <h1 class="title">Choose a Game</h1>
    <hr />
    <div class="lined-list">
        <div class="lined" *ngFor="let game of all">
            <h2>{{game.Name}}</h2>
            <app-lined-spacer></app-lined-spacer>
            <button class="button" (click)="activate(game)">Activate</button>
        </div>
    </div>
    <div class="bottom-buttons">
        <button class="button" (click)="createNewGame()">Create New Game</button>
    </div>
  </ng-container>
</app-frame3>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ChooseGameComponent {
  all : Game[] = []
  newGame : Game | undefined

  constructor(
    private ws : ServerService
  ) {
    this.refresh()
  }

  refresh() {
    this.ws.Games.GetAll().subscribe({
      next: all => {
        if (!all) {
          this.all = []
          return
        } 
        if (isErrorResponse(all)) { return }
        this.all = all
      }
    })

  }

  activate(g : Game) {
    this.ws.SetActiveGame(g.ID)
  }

  createNewGame() {
    this.newGame = {
      Name: "Enter Game",
      ID: "newgameid",
      Players: [],
      GameTime: 0
    }
  }

  saveNewGame() {
    if (this.newGame) {
      this.ws.Games.Save(this.newGame, "User Created")
      this.newGame = undefined
      this.refresh()
    }
  }

}
