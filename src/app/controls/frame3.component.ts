import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-frame3',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cbg"><ng-content></ng-content></div>

    <!-- TOP -->
    <div class="ul"><img src="/assets/frame-3-ul-corner.png"></div>
    <div class="t_s"><img src="/assets/frame-3-top-spread.png"></div>
    <div class="t"><img src="/assets/frame-3-top2.png"></div>
    <div class="t_s"><img src="/assets/frame-3-top-spread.png"></div>
    <div class="ur"><img src="/assets/frame-3-ul-corner.png"></div>

    <!-- Top SPREAD -->
    <div class="l_s"><img src="/assets/frame-3-side-spread.png"></div>
    <div class="c"><ng-content></ng-content></div>
    <div class="r_s"><img src="/assets/frame-3-side-spread.png"></div>

    <div class="l"><img src="/assets/frame-3-side.png"></div>
    <div class="r"><img src="/assets/frame-3-side.png"></div>

    <div class="l_s"><img src="/assets/frame-3-side-spread.png"></div>
    <div class="r_s"><img src="/assets/frame-3-side-spread.png"></div>

    <div class="bl"><img src="/assets/frame-3-ul-corner.png"></div>
    <div class="b_s"><img src="/assets/frame-3-top-spread.png"></div>
    <div class="b"><img src="/assets/frame-3-top2.png"></div>
    <div class="b_s"><img src="/assets/frame-3-top-spread.png"></div>
    <div class="br"><img src="/assets/frame-3-ul-corner.png"></div>
  `,
  styles: [
    `
      :host {
        background-color: transparent;
        display: grid;
        position: relative;
        grid-template-columns: auto 1fr auto 1fr auto;
        grid-template-rows: auto 1fr auto 1fr auto;
        // max-width: 600px;
        // max-height: 500px;
        filter: drop-shadow(4px 4px 6px black);
      }

      .bl, 
      .br, 
      .ur,
      .ul {
        height: 100px;
        width: 99px;
        pointer-events:none;
      }

      .bl {
        transform: scale(1, -1)
      }
      .br {
        transform: scale(-1, -1)
      }
      .ur {
        transform: scale(-1, 1)
      }

      .l_s, .l {
        pointer-events:none;
      }

      .l_s img, 
      .l img {
        width: 35px;
        height: 100%;
        // height: 313px
      }

      .r_s,
      .r {
        display: flex;
        justify-content: flex-end;
        pointer-events:none;
      }
      .r_s img,
      .r img {
        width: 35px;
        height: 100%;
        transform: scale(-1, 1)
      }

      .b_s,
      .b {
        display: flex;
        align-items: flex-end;
        pointer-events:none;
      }

      .t_s, 
      .t {
        display: grid;
        pointer-events:none;
      }
      
      .t_s img, 
      .t img {
        height: 35px;
        width: 100%;
      }
      .b_s img, 
      .b img {
        height: 35px;
        width: 100%;
        transform: scale(1, -1)
      }

      .c {
        margin: -50px;
        display: flex;
        flex-direction: column;
        grid-column: span 3;
        grid-row: span 3
      }

      .cbg {
        position: absolute;
        background-image: url(/assets/bg.jpeg);
        background-size: cover;
        inset: 20px;
        z-index: -1;
        pointer-events:none;
      }


    `
  ]
})
export class Frame3Component {

}
