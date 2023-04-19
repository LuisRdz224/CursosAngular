import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    Contador: {{ contador }} <br />
    <button (click)="changeValue(true)">+1</button>
    <button (click)="resetValue()">Reset</button>
    <button (click)="changeValue(false)">-1</button>
  `,
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent {
  public contador: number = 10;

  changeValue(res: boolean): void {
    res ? (this.contador += 1) : (this.contador -= 1);
  }

  resetValue(): void {
    this.contador = 10;
  }
}
