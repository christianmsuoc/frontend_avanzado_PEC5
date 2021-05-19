import {Component, OnInit} from '@angular/core';
import {SwapiService} from "../../../shared/services/swapi.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characterResponse$ = this.swapiService.getAllCharacters();
  currentPage = new BehaviorSubject(1);

  constructor(private swapiService: SwapiService) {
  }

  ngOnInit(): void {
    this.currentPage.subscribe(value => {
      this.characterResponse$ = this.swapiService.getAllCharacters(value);
    })
  }


  characterPages(count: number): number[] {
    return [...Array(Math.ceil(count / 10)).keys()]
  }

  selectPage(page: number): void {
    this.currentPage.next(page);
  }
}
