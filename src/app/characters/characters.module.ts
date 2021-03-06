import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharactersRoutingModule} from './characters-routing.module';
import {CharacterListComponent} from "./character-list/character-list.component";
import {CharacterComponent} from "./character/character.component";


@NgModule({
  declarations: [
    CharacterListComponent, CharacterComponent
  ],
  exports: [CharacterListComponent, CharacterComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule {
}
