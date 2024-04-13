import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Capital } from '../../interfaces/capitals';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Capital[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByRegion(region: string): void {

    this.countriesService.searchRegion(region)
      .subscribe( countries => {
        this.countries = countries;
        console.log(this.countries);
      })

  }

}
