import {Film} from "./film";
import {Character} from "./character";

export interface Starship {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: Film[];
  pilots: Character[];
  url: string;
  created: string;
  edited: string;
}
