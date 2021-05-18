import {Film} from "./film";
import {Specie} from "./specie";
import {Starship} from "./starship";
import {Vehicle} from "./vehicle";

export interface Character {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Film[];
  species: Specie[];
  starships: Starship[];
  vehicles: Vehicle[];
  url: string;
  created: string;
  edited: string;
}
