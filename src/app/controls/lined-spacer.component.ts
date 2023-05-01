import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lined-spacer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spacer">. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class LinedSpacerComponent {

}
