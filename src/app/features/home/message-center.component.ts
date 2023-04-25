import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-center',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      message-center works!
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
export class MessageCenterComponent {

}
