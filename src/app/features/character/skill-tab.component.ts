import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SheetSectionComponent } from 'src/app/controls/sheet-section.component';
import { SheetComponent } from 'src/app/controls/sheet.component';
import { HomeService, TabDescriptor } from 'src/app/home.service';
import { ServerService } from 'src/app/server.service';

@Component({
  selector: 'app-skill-tab',
  standalone: true,
  imports: [CommonModule, SheetComponent, SheetSectionComponent],
  template: `
      <app-sheet size="400px" maxSize="750px" (sizeChanged)="updateSize($event)">  
  <h1>Skill Tab</h1>
    <div class="form summary" [class.summary-lg]="size == 'max'">
      <div class="sum1">
        <div class="labeled">
          <label>Level</label>
          <input type="number" min="0" max="99" value="4">
        </div>
        <div class="labeled">
          <label>Mod</label>
          <label class="mod">+3</label>
        </div>
        <div class="labeled">
          <label>Total</label>
          <label class="mod">17</label>
        </div>
      </div>
      <div class="sum2">
        <div class="labeled">
          <label>Mod</label>
          <label class="mod">BOD (10)</label>
        </div>
        <div class="labeled">
          <label>Level</label>
          <label class="mod">40 / 50</label>
        </div>
      </div>
    </div>

    <div class="cols" [class.cols-lg]="size == 'max'">
        <app-sheet-section>
          <h1 header>Abilities</h1>
          <div>
            No Unlocked Abilties
          </div>
        </app-sheet-section>

        <app-sheet-section>
        <h1 header>Adjustments</h1>
        <div>
          <button>+ Add Adjustment</button>
        </div>
      </app-sheet-section>
    </div>

    </app-sheet>
  `,
  styles: [
    `
      :host {
        display: grid;
      }

      .summary {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
        justify-content: center;
        margin-bottom: 1em;
      }
      
      .sum2,
      .sum1 {
        display: flex;
        flex-direction: row;
        gap: 1.5em;
        justify-content: center;
      }

      .cols {
        display: grid;
        gap: 1em;  
      }
      .cols-lg {
        grid-template-columns: 1fr 1fr;
      }

      .summary-lg {
        flex-direction: row;
      }
    `
  ]
})
export class SkillTabComponent {
  @Input() tab : TabDescriptor | undefined
  size = "min"
  constructor(
    private server : ServerService,
    private home : HomeService
  ) {
    
  }

  updateSize(event : string) {
    this.size = event
  }
}
