import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-game-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      choose-game-page works!
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
export class ChooseGamePageComponent {

}
