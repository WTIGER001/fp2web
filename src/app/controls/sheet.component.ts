import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Frame3Component } from './frame3.component';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [CommonModule, Frame3Component],
  template: `
  <app-frame3>
  <button class="btn-upper-right" *ngIf="canToggle" (click)="toggle()">Toggle</button>
    <ng-content></ng-content>
    </app-frame3>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        // background-image: var(--page-bg);
        // padding: 1em;
        // filter: var(--filter-lg);
        position: relative;
        display: grid;
      }

      .btn-upper-right {
        position: absolute;
        right: 5px;
        top: 5px;
      }
    `
  ]
})
export class SheetComponent implements OnChanges {
    @Input() 
    size : string = "auto"

    @Input()
    maxSize : string | undefined

    @HostBinding("style.width")
    width : string = "auto"

    canToggle = false

    @Input()
    state : 'min' | 'max' = "min"

    @Output() sizeChanged = new EventEmitter<'min' | 'max'>()

  constructor() {
    this.width = this.size
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.maxSize) {
      this.canToggle = false
      this.state = 'min'
    } else {
      this.canToggle = this.maxSize != this.size
    }
    this.update()
  }

  toggle() {
    if (this.state == 'min') {
      this.state = 'max'
    } else {
      this.state = 'min'
    }
    this.update()
  }

  update() {
    if (this.state == 'min') {
      this.width = this.size
    } else {
      this.width = this.maxSize || this.size
    }
    this.sizeChanged.emit(this.state)
  }
}
