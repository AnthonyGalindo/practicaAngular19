import { NgClass } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';




@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {


  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 1500 },
    // { id: 4, name: 'Yancha', power: 500 },
  ]);

  //   getPowerClases = computed( () => {
  //   return {
  //      'text-danger': true ,
  //   }
  // });


  addCharacter() {
    if (this.name() == '' || this.power() == 0 || this.power()  <= 0 ) {
      return;
    }

    const newCharacter = {
      id : this.characters.length + 1 ,
      name : this.name(),
      power : this.power()
    }

    this.characters.update( (list) => [...list, newCharacter] );
    this.resetFields()
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }


}
