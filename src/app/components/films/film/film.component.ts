import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Film} from "../../../shared/models/film";

@Component({
  selector: 'app-film',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  @Input("film") film: Film = {} as Film;
}
