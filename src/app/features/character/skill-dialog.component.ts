import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      skill-dialog works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class SkillDialogComponent {

}
