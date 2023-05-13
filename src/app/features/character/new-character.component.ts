import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AttributeEditComponent } from 'src/app/controls/attribute-edit.component';
import { SheetSectionComponent } from 'src/app/controls/sheet-section.component';
import { SheetComponent } from 'src/app/controls/sheet.component';
import { Character } from 'src/app/modelp/models';

@Component({
  selector: 'app-new-character',
  standalone: true,
  imports: [CommonModule, FormsModule, SheetComponent, AttributeEditComponent, SheetSectionComponent],
  template: `
    <app-sheet size="600px" max="90vw">
      <div class="form">
        <label>Name</label>
        <input type="text" [(ngModel)]="item.Name" (ngModelChange)="update()">
  
        <h2>Choose Attributes</h2>

        <div class="attrs">
          <app-attribute-edit attrType="BOD"  [attr]="item.Attributes?.BOD"></app-attribute-edit>
          <app-attribute-edit attrType="ATTR" [attr]="item.Attributes?.ATTR"></app-attribute-edit>
          <app-attribute-edit attrType="LUCK" [attr]="item.Attributes?.LUCK"></app-attribute-edit>
          <app-attribute-edit attrType="EMP"  [attr]="item.Attributes?.EMP"></app-attribute-edit>
          <app-attribute-edit attrType="PER"  [attr]="item.Attributes?.PER"></app-attribute-edit>
          <app-attribute-edit attrType="VIT"  [attr]="item.Attributes?.VIT"></app-attribute-edit>
          <app-attribute-edit attrType="INT"  [attr]="item.Attributes?.INT"></app-attribute-edit>
          <app-attribute-edit attrType="WILL" [attr]="item.Attributes?.WILL"></app-attribute-edit>
          <app-attribute-edit attrType="ESS"  [attr]="item.Attributes?.ESS"></app-attribute-edit>
          <app-attribute-edit attrType="TECH" [attr]="item.Attributes?.TECH"></app-attribute-edit>
        </div>
        <div>
        Attribute Points : {{points}}
        </div>

        <div class="buttons">
          <button (click)="save()">Save</button>
        </div>
        
      </div>
    </app-sheet>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .attrs {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;
        flex-direction: row;
      }
    `
  ]
})
export class NewCharacterComponent {
  item: Partial<Character> = {}
  points = 0;

  constructor() {

  }

  save() {
    
  }

  update() {
    
    

  }

  
}
