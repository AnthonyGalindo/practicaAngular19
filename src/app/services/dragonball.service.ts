import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DragonballService {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 1500 },
    // { id: 4, name: 'Yancha', power: 500 },
  ]);


  addCharacter( character : Character ) {
    this.characters.update(
       list => [...list, character]
      );
  }
}
