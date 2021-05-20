import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {SwapiService} from "../../shared/services/swapi.service";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planetResponse$ = this.swapiService.getAllPlanets();
  currentPage = new BehaviorSubject(1);

  constructor(private swapiService: SwapiService) {
  }

  ngOnInit(): void {
    this.currentPage.subscribe(value => {
      this.planetResponse$ = this.swapiService.getAllPlanets(value);
    })
  }


  planetPages(count: number): number[] {
    return [...Array(Math.ceil(count / 10)).keys()]
  }

  selectPage(page: number): void {
    this.currentPage.next(page);
  }
}
