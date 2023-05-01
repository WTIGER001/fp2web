import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HomeService, TabDescriptor } from 'src/app/home.service';
import { ModelType } from 'src/app/modelp/models';
import { ServerService, isErrorResponse } from 'src/app/server.service';

@Component({
  selector: 'app-home-aside',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
  <aside>
    <ul>
      <li (click)="openGame()"><mat-icon svgIcon="dungeon"></mat-icon></li>
      <li *ngFor="let c of characterTabs">
        <mat-icon svgIcon="viking-helmet" *ngIf="c.imageType == 'svg'"></mat-icon>
        <img class="aside-token" [src]="c.image" *ngIf="c.imageType == 'png'">
      </li>
    </ul>  
  </aside>
  `, styles: [
    `
    :host {
      display: contents;
    }

    .aside-token {
      height: 48px;
      width: 48px;
      border-radius: 7px;
    }
    `
  ]
})
export class HomeAsideComponent {
  characterTabs : TabDescriptor[] = []

  constructor(
    private server : ServerService, 
    private home : HomeService
  ) {
    
    this.server.Characters.GetAll().subscribe({
      next: (all) => {
        if (isErrorResponse(all)) {
          this.characterTabs = []
          return 
        }
        if (!all) {
          this.characterTabs = []
          return 
        }
        this.characterTabs = []

        for (const character of all) {
          const tab : TabDescriptor = {
            id: character.ID,
            image: "viking-helmet",
            imageType: "svg", 
            name: character.Name,
            type: 'character'
          }

          // Try to get the picture
          server.GetPicture(character.ID, ModelType.ModelType_Character, "token").subscribe({
            next: pic => {
              if (isErrorResponse(pic)) {
                return 
              }
              if (pic && pic.Data) {
                tab.imageType = "png"
                tab.image = pic.Data
              }
            }
          })

          this.characterTabs.push(tab)
        }
      }
    })
  }

  openGame() {
    const t : TabDescriptor = {
      id: "game",
      type: "game",
      image: "dungeon", 
      imageType: "svg",
      name: "Game"
    }
    this.home.Open(t)
  }

}
