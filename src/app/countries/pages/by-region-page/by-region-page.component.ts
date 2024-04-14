import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Capital } from '../../interfaces/capitals';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Capital[] = [];
  public regions:  Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor( private countriesService: CountriesService ) {}

  searchByRegion(region: Region): void {

    this.selectedRegion = region;

    this.countriesService.searchRegion(region)
      .subscribe( countries => {
        this.countries = countries;
        console.log(this.countries);
      })

  }

}
