import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  nombre: string = 'Luis';
  edad: number = 25;

  get getCapitalizedName(): string {
    return this.nombre.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  changeName(name: string): void {
    this.nombre = name;
  }
  changeEdad(age: number): void {
    this.edad = age;
  }
}
