import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      reference-table works!
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
export class ReferenceTableComponent {

}
