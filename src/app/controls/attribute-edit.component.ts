import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PrimaryAttribute } from '../modelp/models';

@Component({
  selector: 'app-attribute-edit',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label>{{attrType}}</label>
    <div>
      <input type="number" [(ngModel)]="attr.RawValue">
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
export class AttributeEditComponent {
  @Input() attrType : string 
  @Input() attr : PrimaryAttribute 

  constructor() {
    this.attrType = "BOD"
    this.attr = {
      SetValue: 0, 
      RawValue: 0, 
      CalcValue: 0
    }
  }
}
