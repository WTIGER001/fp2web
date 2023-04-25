import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FrameComponent } from '../controls/frame.component';

@Component({
  selector: 'app-character-weapon-tile',
  standalone: true,
  imports: [CommonModule, FrameComponent],
  template: `
    <app-frame>
        Just Some Text
    </app-frame>
  `,
  styles: [
    `
    :host {
      display: grid;
      background-color: blue;
      height: 550px;
      width: 400px;
      color: white;
      background-color: #1C2E38;
      grid-template-columns : auto 1fr auto;
      grid-template-rows : auto 1fr auto;
    }
    `
  ]
})
export class CharacterWeaponTileComponent {

}
