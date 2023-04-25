import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="top"></div>
  <div class="center"><ng-content></ng-content></div>
  <div class="bottom"></div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-width: 300px;
      }`,`
      .center{
        background-image: url(/assets/frame-2-middle.png);
      }`,`
      .bottom,
      .top {
        background-image: url(/assets/frame-2-top.png);
        background-size: contain;
        aspect-ratio: 4.327586;
      }`,`
      .bottom {
        transform: scaleY(-1);
      }
    `
  ]
})
export class FrameComponent {

}
