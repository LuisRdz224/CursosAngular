import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public names: string[] = ['Luis', 'Eunice', 'bb'];
  public deletedHero?: string;

  deleteHero(): void {
    this.deletedHero = this.names.pop();
  }
}
