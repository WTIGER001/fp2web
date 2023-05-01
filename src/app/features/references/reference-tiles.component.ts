import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reference-tiles',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      reference-tiles works!
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
export class ReferenceTilesComponent {

}
