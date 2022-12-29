import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent{

  opA: number = 0;
  opB: number = 0;
  resultado: number = 0;

  sumar():void{
    this.resultado = this.opA + this.opB
  }

}
