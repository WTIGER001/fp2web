import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-skill-tile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      character-skill-tile works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class CharacterSkillTileComponent {

}
