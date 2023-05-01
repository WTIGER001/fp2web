import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Character, PrimaryAttributeVal, RefSkill, Skill } from 'src/app/modelp/models';
import { ServerService, isErrorResponse } from 'src/app/server.service';

@Component({
  selector: 'app-character-skills',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatSlideToggleModule],
  template: `
    <div> 
      <h3>Skills</h3>
      <mat-slide-toggle>Show All</mat-slide-toggle>
    <div>
    <div class="skills">
      <ng-container *ngFor="let s of skills">
        <div>{{s.Name}}</div>
        <div>{{s.Attribute}}</div>
        <div>{{s.Level}}</div>
        <div>{{s.Mod | plus}}</div>
        <div>{{s.Total}}</div>
        <div><mat-icon>roll_dice</mat-icon></div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class CharacterSkillsComponent implements OnChanges{
  @Input() character : Character | undefined
  showAll = false
  skills : Skill[] = []
  refSkills : RefSkill[] = []

  constructor(
    private server: ServerService
  ) {
    this.server.RefSkills.GetAll().subscribe({
      next: (all) => {
        if (isErrorResponse(all)) {
          return 
        }
        if (!all) {
          return 
        }
        this.refSkills = all
      }
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateShown() 
  }
  
  findAttr(skill : Skill) : PrimaryAttributeVal {
    const found = this.refSkills.find(s => s.ID == skill.ID)
    if (found) {
      return found.AttributeType
    }
    return PrimaryAttributeVal.PrimaryAttributeVal_UNK
  }

  updateShown() {
    if (!this.character) {
      return 
    }
    if (this.showAll) {
      this.skills = this.character.Skills
    } else {
      this.skills = this.character.Skills.filter(s => s.Level > 0)
    }
  }

}
