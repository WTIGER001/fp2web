import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CharacterSkillsComponent } from './character-skills.component';
import { CharacterWeaponTileComponent } from './character-weapon-tile.component';

@Component({
  selector: 'app-character-sheet',
  standalone: true,
  imports: [CommonModule, CharacterWeaponTileComponent, CharacterSkillsComponent],
  template: `
    <p>
      character-sheet works!
    </p>
    <app-character-weapon-tile></app-character-weapon-tile>
    <div style="height: 300px"></div> 
  `,
  styles: [
  ]
})
export class CharacterSheetComponent {

}
