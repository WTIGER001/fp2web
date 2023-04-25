import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      reference-home works!
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
export class ReferenceHomeComponent {

}
