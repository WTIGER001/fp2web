import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sheet-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
        <div class="sheet-section-header">
        <ng-content select="[header]"></ng-content>
    </div>
    <div class="sheet-section-body">
        <ng-content></ng-content>
    </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      .sheet-section-header {
        border-bottom: 1px solid var(--accent-bg);
        margin-bottom: 1em;

        h1, h2, h3, h4, h5 {
          text-align: center;
        }
      }
      .sheet-section-body {
        
      }

    `
  ]
})
export class SheetSectionComponent {

}
