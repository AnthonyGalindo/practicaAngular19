import {  Component,  EventEmitter,  output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',

})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);

  newCharacterEvent = output<Character>();


  addCharacter() {
    if (this.name() == '' || this.power() == 0 || this.power()  <= 0 ) {
      return;
    }
5
    const newCharacter:Character = {
      id : Math.floor( Math.random() * 1000 ),
      name : this.name(),
      power : this.power()
    }

    // this.characters.update( (list) => [...list, newCharacter] );
    console.log(`${this.name()}- ${this.power()}`);

    this.newCharacterEvent.emit(newCharacter);
    this.resetFields()
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }


 }
