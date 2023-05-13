import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SheetSectionComponent } from 'src/app/controls/sheet-section.component';
import { SheetComponent } from 'src/app/controls/sheet.component';
import { HomeService, TabDescriptor } from 'src/app/home.service';
import { Character } from 'src/app/modelp/models';
import { ServerService, isErrorResponse } from 'src/app/server.service';
import { CharacterAttributesComponent } from './character-attributes.component';

@Component({
  selector: 'app-character-tab',
  standalone: true,
  imports: [CommonModule, FormsModule, SheetComponent, SheetSectionComponent, CharacterAttributesComponent],
  template: `
    <app-sheet size="600px" maxSize="1200px" *ngIf="item">
      <h1>Character</h1>

      <div class="form">
        <label>Name</label>
        <input type="text" [(ngModel)]="item.Name" >
      </div>

      <app-sheet-section>
        <h1 header>Attributes</h1>
        <app-character-attributes [item]="item"></app-character-attributes>
      </app-sheet-section>

    </app-sheet>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `
  ]
})
export class CharacterTabComponent implements OnInit {
  @Input() tab: TabDescriptor | undefined
  @Input() item: Character | undefined

  constructor(
    private server: ServerService,
    private home: HomeService
  ) { }
  
  ngOnInit(): void {
    if (!this.tab) {
      console.log("NO TAB")
    } else if (this.tab.data) {
      this.item = <Character>this.tab.data
    } else if (this.tab.id) {
      this.server.Characters.Get(this.tab.id).subscribe({
        next: input => {
          if (!input || isErrorResponse(input)) {
            return
          }
          this.item = input
        }
      })
    }

  }

}
