import {Specie} from "./specie";
import {Starship} from "./starship";
import {Vehicle} from "./vehicle";
import {Character} from "./character";
import {Planet} from "./planet";

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: Specie[];
  starships: Starship[];
  vehicles: Vehicle[];
  characters: Character[];
  planets: Planet[];
  url: string;
  created: string;
  edited: string;
}
