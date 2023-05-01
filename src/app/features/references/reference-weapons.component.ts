import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reference-weapons',
  standalone: true,
  imports: [CommonModule],
  template: `
  <mat-form-field>
    <mat-label>ID</mat-label>
    <input matInput placeholder="ID for item">
    <mat-hint>Must be unique</mat-hint>
  </mat-form-field>
  <mat-form-field>
    <mat-label>Name</mat-label>
    <input matInput placeholder="Name">
  </mat-form-field>


  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ReferenceWeaponsComponent {

}
