import { Component } from '@angular/core';
import { Persona } from './persona_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de personas';

  personas: Persona[] = [
    new Persona('Luis', 'Rodriguez'),
    new Persona('Eunice', 'Torres'),
    new Persona('Prueba', 'Lorem'),
  ];
  nombreInput: string ='';
  apellidoInput: string ='';

  agregarPersona():void{
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }


}
