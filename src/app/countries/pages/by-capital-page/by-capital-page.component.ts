import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Capital } from '../../interfaces/capitals';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public capitals: Capital[] = [];

  constructor( private countriesService: CountriesService  ) {}

  searchByCapital(term: string): void {

    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.capitals = countries;
      })

  }

}
