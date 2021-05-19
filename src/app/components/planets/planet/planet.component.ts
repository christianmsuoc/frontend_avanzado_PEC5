import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Planet} from "../../../shared/models/planet";

@Component({
  selector: 'app-planet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  @Input("planet") planet: Planet = {} as Planet;
}
