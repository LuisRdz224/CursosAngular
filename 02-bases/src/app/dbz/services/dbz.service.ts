import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({ providedIn: 'root' })
export class DbzService {
    public characters: Character[] =
        [{
            id: uuid(),
            name: 'Krillin',
            power: 1000
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name: 'Vegeta',
            power: 7000
        }]

    public onNewCharacter(character: Character): void {
        const newCharacter: Character = { id: uuid(), ...character }
        this.characters.push(newCharacter)
    }
    // public onDeletedId(index: number): void {
    //     console.log(index);
    //     this.characters.splice(index, 1)
    // }
    public onDeletedId(id: string): void {
        this.characters = this.characters.filter(character => character.id !== id)
    }

}