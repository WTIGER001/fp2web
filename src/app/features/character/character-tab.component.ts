import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-tab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      character-tab works!
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
export class CharacterTabComponent {

}
