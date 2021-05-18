import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, map} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {SwapiService} from "../../shared/services/swapi.service";
import {Character} from "../../shared/models/character";
import {Film} from "../../shared/models/film";
import {Planet} from "../../shared/models/planet";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search = new FormControl('');
  characters$: Observable<Character[] | []> = of([]);
  films$: Observable<Film[] | []> = of([]);
  planets$: Observable<Planet[] | []> = of([]);

  constructor(private swapiService: SwapiService) { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(300),
      map( text => {
        this.characters$ = this.swapiService.searchCharacter(text);
        this.films$ = this.swapiService.searchFilm(text);
        this.planets$ = this.swapiService.searchPlanet(text);
      })
    ).subscribe();
  }

}
