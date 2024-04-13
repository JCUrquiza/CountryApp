import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Capital } from '../../interfaces/capitals';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Capital[] = [];

  constructor( private countriesService: CountriesService ) {}

  searchByCountries(term: string): void {

    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        console.log(this.countries);
      })

  }

}
