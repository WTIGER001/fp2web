import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modification-editor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      modification-editor works!
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
export class ModificationEditorComponent {

}
