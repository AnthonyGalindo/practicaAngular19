import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {Character} from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
characters_list = input.required<Character[]> ();
listName = input.required<String> ();
}
