import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ref-weapon-edit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      ref-weapon-edit works!
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
export class RefWeaponEditComponent {

}
