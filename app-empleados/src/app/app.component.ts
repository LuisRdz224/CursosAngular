import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  empleados: Empleado[] = [
    new Empleado('Juan', 'Diaz', 'Presidente', 1500),
    new Empleado('Luis', 'Diaz', 'Programador', 1500),
    new Empleado('Osquir', 'Diaz', 'Sudoroso', 1500),
    new Empleado('Aaron', 'Diaz', 'Ryan Gosling', 1500),
    new Empleado('Kike', 'Diaz', 'Programador', 1500),
  ];
}
