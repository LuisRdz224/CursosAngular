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
  textoRegistro = 'No hay nadie registrado';

  getUsuarioRegistrado() {
    this.usuarioRegistrado = false;
  }

  setUsuarioRegistrado(event: Event) {
    // alert('El usuario se acaba de registrar');
    if ((<HTMLInputElement>event.target).value == 'si') {
      this.textoRegistro = 'El usuario se acaba de registrar';
    } else {
      this.textoRegistro = 'No hay nadie registrado';
    }
  }

  llamaEmpresa(value: String) {}

  // getEdad() {
  //   return this.edad;
  // }
}
