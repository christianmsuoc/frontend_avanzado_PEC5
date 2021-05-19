import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { CharacterListComponent } from './components/character/character-list/character-list.component';
import { CharacterComponent } from './components/character/character/character.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { FilmComponent } from './components/films/film/film.component';
import { PlanetListComponent } from './components/planets/planet-list/planet-list.component';
import { PlanetComponent } from './components/planets/planet/planet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CharacterListComponent,
    CharacterComponent,
    FilmListComponent,
    FilmComponent,
    PlanetListComponent,
    PlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
