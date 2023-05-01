import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Frame3Component } from 'src/app/controls/frame3.component';
import { FocusSelectDirective } from 'src/app/directives/focus-select.directive';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-enter-player',
  standalone: true,
  imports: [CommonModule, FormsModule, Frame3Component, FocusSelectDirective],
  template: `
  <app-frame3>
    <h1 class="title">Player Information</h1>
    <hr />
    <div class="form">
    <label>Name</label>
    <input focus-select type="text" [(ngModel)]="name">
    <label>Role</label>
  
    <div class="radios">
      <div class="radio"><label><input type="radio" [(ngModel)]="playerType" value="player"> Player </label></div>
      <div class="radio"><label><input type="radio" [(ngModel)]="playerType" value="gm"> Gamemaster </label></div>
    </div>
  </div>
    <div class="bottom-buttons">
        <button class="button" (click)="submit()">Submit</button>
    </div>
</app-frame3>
  `,
})
export class EnterPlayerComponent {
  name : string | undefined
  playerType : string = "player"

  constructor(
    private server : ServerService
  ) {}

  submit() {
    if (!this.name) {
       return 
    }
    // Save
    const isGm = this.playerType == "gm"
    this.server.Players.Save({
      name: this.name,
      id: this.name,
      GM: this.playerType == "gm"
    })

    localStorage.setItem("last-player", this.name)
    localStorage.setItem("last-player-gm", isGm?"true":"false")
    localStorage.setItem("last-game", this.server.Game?.ID || "")
    
    // Go to Home
  }

}
