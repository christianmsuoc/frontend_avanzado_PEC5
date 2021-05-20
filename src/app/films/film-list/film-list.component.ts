import {Component, OnInit} from '@angular/core';
import {SwapiService} from "../../shared/services/swapi.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  filmsResponse$ = this.swapiService.getAllFilms();
  currentPage = new BehaviorSubject(1);

  constructor(private swapiService: SwapiService) {
  }

  ngOnInit(): void {
    this.currentPage.subscribe(value => {
      this.filmsResponse$ = this.swapiService.getAllFilms(value);
    })
  }


  filmPages(count: number): number[] {
    return [...Array(Math.ceil(count / 10)).keys()]
  }

  selectPage(page: number): void {
    this.currentPage.next(page);
  }

}
