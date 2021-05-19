import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-planet',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {

}
