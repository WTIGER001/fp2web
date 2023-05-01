import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference-recent',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      reference-recent works!
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
export class ReferenceRecentComponent {

}
