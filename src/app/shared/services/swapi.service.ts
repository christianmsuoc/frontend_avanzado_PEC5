import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Character} from "../models/character";
import {Film} from "../models/film";
import {Planet} from "../models/planet";
import {map} from "rxjs/operators";
import {SwapiResponse} from "../models/swapi-response";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private http: HttpClient) {
  }

  getAllCharacters(page?: number): Observable<SwapiResponse<Character>> {
    const params = new HttpParams().append('page', (page ?? 1).toString());
    return this.http.get<SwapiResponse<Character>>(`${environment.SW_API_URL}/people`, {params});
  }

  getAllFilms(page?: number): Observable<SwapiResponse<Film>> {
    const params = new HttpParams().append('page', (page ?? 1).toString());
    return this.http.get<SwapiResponse<Film>>(`${environment.SW_API_URL}/films`, {params});
  }

  getAllPlanets(page?: number): Observable<SwapiResponse<Planet>> {
    const params = new HttpParams().append('page', (page ?? 1).toString());
    return this.http.get<SwapiResponse<Planet>>(`${environment.SW_API_URL}/planets`, {params});
  }

  searchCharacter(name: string): Observable<Character[] | undefined> {
    const params = new HttpParams().appendAll({search: name})
    return this.http.get<SwapiResponse<Character>>(`${environment.SW_API_URL}/people/`, {params}).pipe(
      map(response => response.results.length > 0 ? response.results : undefined)
    );
  }

  searchFilm(name: string): Observable<Film[] | undefined> {
    const params = new HttpParams().appendAll({search: name})
    return this.http.get<SwapiResponse<Film>>(`${environment.SW_API_URL}/films/`, {params}).pipe(
      map(response => response.results.length > 0 ? response.results : undefined)
    );
  }

  searchPlanet(name: string): Observable<Planet[] | undefined> {
    const params = new HttpParams().appendAll({search: name})
    return this.http.get<SwapiResponse<Planet>>(`${environment.SW_API_URL}/planets/`, {params}).pipe(
      map(response => response.results.length > 0 ? response.results : undefined)
    );
  }
}
