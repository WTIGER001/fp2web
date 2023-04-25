import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ref-weapon-table',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      ref-weapon-table works!
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
export class RefWeaponTableComponent {

}
