import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent {

  public character: Character = {
    name: '',
    power: 0
  }
  emitCharacter(): void {
    console.log(this.character);

  }

}
