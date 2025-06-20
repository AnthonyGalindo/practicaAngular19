
import { Component, computed, signal, WritableSignal, Signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";



@Component({
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',

})
export class DragonballSuperPageComponent {


  // name = signal('');
  // power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Piccolo', power: 1500 },
    // { id: 4, name: 'Yancha', power: 500 },
  ]);


  // addCharacter() {
  //   if (this.name() == '' || this.power() == 0 || this.power()  <= 0 ) {
  //     return;
  //   }

  //   const newCharacter = {
  //     id : this.characters.length + 1 ,
  //     name : this.name(),
  //     power : this.power()
  //   }

  //   this.characters.update( (list) => [...list, newCharacter] );
  //   this.resetFields()
  // }

  // resetFields() {
  //   this.name.set('');
  //   this.power.set(0);
  // }


}
