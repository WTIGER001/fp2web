import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: NumberComponent, multi: true }
  ],
  template: `
    <input type="number" [min]="min" [max]="max" [step]="step" [(ngModel)]="value" #inputter (ngModelChange)="onChanged()" [disabled]="disabled">
    <div class="step">
      <button class="step-up" (click)="clickUp()"><div></div></button>
      <button class="step-down" (click)="clickDown()"><div></div></button>
    </div>
  `,
  styles: [
    `
    /* <button class="step-up" (click)="clickUp()"><mat-icon class="icon" svgIcon="chevron"></mat-icon></button> */

      :host {
        display: grid;
        position: relative;

        input[type=number] {
          text-align: center;
          padding: 0;
          // padding-right: 16px;
          font-size: 16pt;
        }
      }

      .step {
        display: grid;
        position: absolute;
        right: 0;
        top:0;
        bottom: 0;
        background: transparent;
        color: var(--accent-bg);
        padding: 2px;
        aspect-ratio: 0.5;
        visibility: hidden;
      }

      :host:hover .step {
        visibility: visible;
      }

      .mat-icon {
        color: var(--accent-bg);
      }

      .step-up,
      .step-down {
        display: grid;
        min-width: 1ch;
        border: 0;
        outline: 0;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        min-height: 1ch;
      }

      .step-up div {
        background-color: var(--accent-bg);;
        height: 100%;
        width: 100%;
        -webkit-mask: url(/assets/icons/chevron-up.svg) no-repeat 100% 100%;
        mask:  url(/assets/icons/chevron-up.svg) no-repeat 100% 100%;
        -webkit-mask-size: contain;
        mask-size: contain;
      }

      .step-down div {
        background-color: var(--accent-bg);;
        height: 100%;
        width: 100%;
        -webkit-mask: url(/assets/icons/chevron-down.svg) no-repeat 100% 100%;
        mask:  url(/assets/icons/chevron-down.svg) no-repeat 100% 100%;
        -webkit-mask-size: contain;
        mask-size: contain;
      }
    `
  ]
})
export class NumberComponent implements ControlValueAccessor{

  @ViewChild("inputter", {static: true}) input : ElementRef | undefined

  disabled : boolean = false
  @Input() min : number = 1
  @Input() max : number = 99
  @Input() step : number = 1

  @Input()
  value: number = 0

  @Output() changes = new EventEmitter<number>()

  onTouch : any
  onChange : ((_: any) => void) | undefined

  clickUp() {
    if (this.input) {
      this.input.nativeElement.stepUp()
      this.onChanged()
    } 
  }

  clickDown() {
    if (this.input) {
      this.input.nativeElement.stepDown()
      this.onChanged()
    } 
  }

  onChanged() {
    if (this.onChange) {
      this.onChange(this.value)
    }
    this.changes.emit(this.value)
  }
  writeValue(obj: any): void {
    this.value = Number(obj)
  }
  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }
}
