import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button style="height:200px; width:200px; font-size: 60px;" nbButton hero status="danger" *ngIf="!value">{{ value }}</button>
      <button style="height:200px; width:200px; font-size: 60px;" nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
      <button style="height:200px; width:200px; font-size: 60px;" nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['']
})
export class SquareComponent {

  @Input() value: 'X' | 'O' | ' ' = ' ';
  rando: number = 0;

  constructor() {
  }
}
