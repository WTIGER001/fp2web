import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ref-weapon-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      ref-weapon-details works!
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
export class RefWeaponDetailsComponent {

}
