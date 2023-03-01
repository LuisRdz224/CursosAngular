import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
  //styles: ['p{background-color: red;}'], //uso de estilos inline
})
export class EmpleadoComponent {
  nombre = 'Luis';
  apellido = 'Rodriguez';
  edad = 18;
  habilitarBtn = false;

  usuarioRegistrado = false;

  getUsuarioRegistrado() {
    this.usuarioRegistrado = true;
  }

  llamaEmpresa(value: String) {}

  // getEdad() {
  //   return this.edad;
  // }
}
