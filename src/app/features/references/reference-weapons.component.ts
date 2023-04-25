import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference-weapons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      reference-weapons works!
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
export class ReferenceWeaponsComponent {

}
