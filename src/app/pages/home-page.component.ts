import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeAsideComponent } from '../features/home/home-aside.component';
import { HomeTabsComponent } from '../features/home/home-tabs.component';
import { MessageCenterComponent } from '../features/home/message-center.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule, HomeAsideComponent, MessageCenterComponent, HomeTabsComponent],
  template: `
      <app-home-aside></app-home-aside>
      <main>
        <app-home-tabs></app-home-tabs>
      </main>
      <app-message-center></app-message-center>
  `,
})
export class HomePageComponent {
 

}
