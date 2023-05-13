import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AttributeEditComponent } from 'src/app/controls/attribute-edit.component';
import { Character } from 'src/app/modelp/models';

@Component({
  selector: 'app-character-attributes',
  standalone: true,
  imports: [CommonModule, AttributeEditComponent],
  template: `
  <div class="form items" *ngIf="item && item.Attributes">
    <app-attribute-edit attrType="BOD"  [attr]="item.Attributes.BOD"></app-attribute-edit>
    <app-attribute-edit attrType="ATTR" [attr]="item.Attributes.ATTR"></app-attribute-edit>
    <app-attribute-edit attrType="LUCK" [attr]="item.Attributes.LUCK"></app-attribute-edit>
    <app-attribute-edit attrType="EMP"  [attr]="item.Attributes.EMP"></app-attribute-edit>
    <app-attribute-edit attrType="PER"  [attr]="item.Attributes.PER"></app-attribute-edit>
    <app-attribute-edit attrType="VIT"  [attr]="item.Attributes.VIT"></app-attribute-edit>
    <app-attribute-edit attrType="INT"  [attr]="item.Attributes.INT"></app-attribute-edit>
    <app-attribute-edit attrType="WILL" [attr]="item.Attributes.WILL"></app-attribute-edit>
    <app-attribute-edit attrType="ESS"  [attr]="item.Attributes.ESS"></app-attribute-edit>
    <app-attribute-edit attrType="TECH" [attr]="item.Attributes.TECH"></app-attribute-edit>
  </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      .items {
        display: flex;
        gap: 1em;
        flex-direction: row;
        flex-wrap: wrap;
      }
    `
  ]
})
export class CharacterAttributesComponent implements OnChanges{
  @Input() item : Character | undefined

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.item?.Attributes?.BOD
  }

}