import { Injectable } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<SwapiResponse<Character>>(`${environment.SW_API_URL}/people`).pipe(
      map(response => response.results)
    );
  }

  getAllFilms(): Observable<Film[]> {
    return  this.http.get<SwapiResponse<Film>>(`${environment.SW_API_URL}/films`).pipe(
      map(response => response.results)
    );
  }

  getAllPlanets(): Observable<Planet[]> {
    return  this.http.get<SwapiResponse<Planet>>(`${environment.SW_API_URL}/planets`).pipe(
      map(response => response.results)
    );
  }

  searchCharacter(name: string): Observable<Character[]> {
    const params = new HttpParams().appendAll({search: name})
    return this.http.get<SwapiResponse<Character>>(`${environment.SW_API_URL}/people/`, {params}).pipe(
      map(response => response.results)
    );
  }

  searchFilm(name: string): Observable<Film[]> {
    const params = new HttpParams().appendAll({search: name})
    return this.http.get<SwapiResponse<Film>>(`${environment.SW_API_URL}/films/`, {params}).pipe(
      map(response => response.results)
    );
  }

  searchPlanet(name: string): Observable<Planet[]> {
    const params = new HttpParams().appendAll({search: name})
    return this.http.get<SwapiResponse<Planet>>(`${environment.SW_API_URL}/planets/`, {params}).pipe(
      map(response => response.results)
    );
  }
}
