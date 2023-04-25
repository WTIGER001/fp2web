import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      character-skills works!
    </p>
  `,
  styles: [
    `:host { 
      display: block;
      background-color: blue;
      height: 400px;
      width: 400px;
      color: white;
      background-color: #1C2E38;
    }`,
  ]
})
export class CharacterSkillsComponent {

}
