import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ref-weapon-tile',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      ref-weapon-tile works!
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
export class RefWeaponTileComponent {

}
