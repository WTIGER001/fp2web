import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimaryAttribute } from '../modelp/models';
import { NumberComponent } from './number.component';

@Component({
  selector: 'app-attribute-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, NumberComponent],
  template: `
    <div class=" form labeled">
      <label>{{attrType}}</label>
      <div>
        <app-number [(ngModel)]="attr" (ngModelChange)="updated($event)"></app-number>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      .attr {
        width: 5ch;
      }
    `
  ]
})
export class AttributeEditComponent {
  @Input() attrType : string 
  @Input() attr : PrimaryAttribute | undefined =  {
    SetValue: 0, 
    RawValue: 0, 
    CalcValue: 0
  }

  constructor() {
    this.attrType = "BOD"
    this.attr = {
      SetValue: 0, 
      RawValue: 0, 
      CalcValue: 0
    }
  }

  updated(newValue : number) {
    console.log("NEW VALUe, ", this.attrType, newValue);
    
  }
}
