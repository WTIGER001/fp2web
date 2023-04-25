import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { CharacterSheetComponent } from '../features/character-sheet.component';
import { HomeAsideComponent } from '../features/home/home-aside.component';
import { MessageCenterComponent } from '../features/home/message-center.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, CharacterSheetComponent, HomeAsideComponent, MessageCenterComponent],
  template: `
      <app-home-aside></app-home-aside>
      <main>
        <mat-tab-group [mat-stretch-tabs]="false" class="inset">
        <mat-tab  class="tab"> 
          <ng-template mat-tab-label>
          <div class="tab">
            <mat-icon svgIcon="viking-helmet"></mat-icon>
            Ragnar
            <mat-icon >close</mat-icon>
            </div>
          </ng-template>
            <app-character-sheet></app-character-sheet>
        </mat-tab>
        <mat-tab label="Second"> Content 2 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
        <mat-tab label="Third"> Content 3 </mat-tab>
      </mat-tab-group>
      </main>
      <app-message-center></app-message-center>
  `,
})
export class HomePageComponent {

}
