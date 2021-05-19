import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Character} from "../../../shared/models/character";

@Component({
  selector: 'app-character',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input("character") character: Character = {} as Character;
}
