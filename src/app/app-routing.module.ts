import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CharacterListComponent} from "./components/character/character-list/character-list.component";
import {FilmListComponent} from "./components/films/film-list/film-list.component";
import {PlanetListComponent} from "./components/planets/planet-list/planet-list.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'characters', component: CharacterListComponent},
  {path: 'films', component: FilmListComponent},
  {path: 'planets', component: PlanetListComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
