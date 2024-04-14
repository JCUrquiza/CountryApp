import { Capital } from "./capitals";
import { Region } from "./region.type";

export interface CacheStore {
  byCountries: TermCountries;
  byCapital: TermCountries;
  byRegion: RegionCountries;
}

export interface TermCountries {
  term: string;
  countries: Capital[];
}

export interface RegionCountries {
  region: Region;
  countries: Capital[];
}
