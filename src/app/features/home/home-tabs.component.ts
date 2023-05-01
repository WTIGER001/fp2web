import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeService, TabDescriptor } from 'src/app/home.service';
import { ServerService } from 'src/app/server.service';
import { GameTabComponent } from '../game/game-tab.component';

@Component({
  selector: 'app-home-tabs',
  standalone: true,
  imports: [CommonModule, GameTabComponent, MatIconModule, MatTabsModule],
  template: `
  <mat-tab-group [mat-stretch-tabs]="false" class="inset">
  <mat-tab  class="tab" *ngFor="let t of tablist"> 
    <ng-template mat-tab-label>
    <div class="tab">
      <mat-icon *ngIf="t.imageType == 'svg'" svgIcon="{{t.image}}"></mat-icon>
      {{t.name}}
      <mat-icon >close</mat-icon>
      </div>
    </ng-template>
    <ng-container [ngSwitch]="t.type">
      <app-game-tab *ngSwitchCase="'game'"></app-game-tab>
    </ng-container>
  </mat-tab>
</mat-tab-group>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class HomeTabsComponent {
  tablist : TabDescriptor[] = []
  constructor(
    private server : ServerService, 
    private home : HomeService
  ) {
    home.open$.subscribe({
      next: (tabs) => {
        this.tablist = [...tabs]
      }
    })
  }

  Close(t : TabDescriptor) {
    this.home.Close(t)
  }

}

