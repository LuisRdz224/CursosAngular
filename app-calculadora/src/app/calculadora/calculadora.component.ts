import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent {
  opA: number;
  opB: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  suma(): void {
    let resultado = this.opA + this.opB;
    this.resultadoSuma.emit(resultado);
  }
}
