import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-aside',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
  <aside>
    <ul>
      <li (click)="toggle('game')" [class.active]="show == 'game'"><mat-icon svgIcon="dungeon"></mat-icon></li>
      <li><mat-icon svgIcon="viking-helmet"></mat-icon></li>
      <li><mat-icon svgIcon="war"></mat-icon></li>
      <li></li>
      <li><mat-icon svgIcon="body-armor"></mat-icon></li>
      <li><mat-icon svgIcon="game-ui-weapon"></mat-icon></li>
      <li><mat-icon svgIcon="item-crystal"></mat-icon></li>
      <li><mat-icon svgIcon="skill-spell-book"></mat-icon></li>
      <li><mat-icon svgIcon="item-big-potion"></mat-icon></li>
      <li><mat-icon svgIcon="item-treasure-chest"></mat-icon></li>
      <li><mat-icon svgIcon="dragon"></mat-icon></li>
      <li><mat-icon svgIcon="wizard"></mat-icon></li>
      <li><mat-icon svgIcon="effect-sparkle"></mat-icon></li>
    </ul>  
    <div class="aside-contents" *ngIf="show">
    SOME TEXT
    </div>
  </aside>
  `, styles: [
    `
    :host {
      display: contents;
    }
    `
  ]
})
export class HomeAsideComponent {
  show : string | undefined = undefined

  toggle(item : string) {
    if (this.show == item) {
      this.show = undefined
    } else {
      this.show = item
    }
  }
}
