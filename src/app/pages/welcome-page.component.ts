import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      welcome-page works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
      }

      .mat-drawer-content {
        padding: 12px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    `
  ]
})
export class WelcomePageComponent {

}
