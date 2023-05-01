import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ref-weapon-aside',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      ref-weapon-aside works!
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
export class RefWeaponAsideComponent {

}
