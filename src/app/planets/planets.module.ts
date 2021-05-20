import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import {PlanetListComponent} from "./planet-list/planet-list.component";
import {PlanetComponent} from "./planet/planet.component";


@NgModule({
  declarations: [PlanetListComponent, PlanetComponent],
  exports: [PlanetListComponent, PlanetComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
