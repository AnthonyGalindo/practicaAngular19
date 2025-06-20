import {  Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',

})
export class CharacterAddComponent {

  name = signal('');
  power = signal(0);


  addCharacter() {
    if (this.name() == '' || this.power() == 0 || this.power()  <= 0 ) {
      return;
    }

    const newCharacter:Character = {
      id : 10000,
      name : this.name(),
      power : this.power()
    }

    // this.characters.update( (list) => [...list, newCharacter] );
    console.log(`${this.name()}- ${this.power()}`);

    this.resetFields()
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }


 }
