import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hola mundo desde TS';
  contador: number = 10;

  changeValue(res: boolean): void {
    res ? (this.contador += 1) : (this.contador -= 1);
  }

  resetValue(): void {
    this.contador = 10;
  }
}
