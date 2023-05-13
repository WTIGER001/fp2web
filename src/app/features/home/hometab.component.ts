import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { TabDescriptor } from 'src/app/home.service';
import { CharacterTabComponent } from '../character/character-tab.component';
import { NewCharacterComponent } from '../character/new-character.component';
import { SkillTabComponent } from '../character/skill-tab.component';
import { GameTabComponent } from '../game/game-tab.component';
import { HomeTabsComponent } from './home-tabs.component';

//

@Component({
  selector: 'app-hometab',
  standalone: true,
  imports: [CommonModule, GameTabComponent, SkillTabComponent,
     HomeTabsComponent, NewCharacterComponent, CharacterTabComponent],
  template: `
  <ng-container [ngSwitch]="tab?.type">
    <app-game-tab       *ngSwitchCase="'game'"                         ></app-game-tab>
    <app-character-tab  *ngSwitchCase="'character'"         [tab]="tab"                ></app-character-tab>
    <app-new-character  *ngSwitchCase="'new-character'"    ></app-new-character> 
    <app-skill-tab      *ngSwitchCase="'skill'"                        ></app-skill-tab>
  </ng-container>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class HometabComponent implements OnInit{
  @Input() tab : TabDescriptor | undefined

  constructor(
    public element : ElementRef, 
    public parent : HomeTabsComponent 
    ){}

  ngOnInit(): void {
    if (!this.tab) {
      return 
    }
    this.tab.element = <HTMLElement> this.element.nativeElement
    this.parent.update()
  }
}
