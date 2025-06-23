import { Injectable, signal , effect} from '@angular/core';
import { Character } from '../interfaces/character.interface';

const  getCharactersFromLocal =  ():Character[] => {
const Characters = localStorage.getItem('charactersLocal');
 return Characters ?  JSON.parse(Characters): [];

}


@Injectable({providedIn: 'root'})
export class DragonballService {



  characters = signal<Character[]>( getCharactersFromLocal() );


  addCharacter( character : Character ) {
    this.characters.update(
       list => [...list, character]
      );


  }

  saveCharactersLocal = effect(() => {
        localStorage.setItem('charactersLocal', JSON.stringify( this.characters() ));
  });





}



 // { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 1500 },
    // { id: 4, name: 'Yancha', power: 500 },
