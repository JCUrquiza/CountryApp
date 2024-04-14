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
  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService  ) {}

  searchByCapital(term: string): void {

    this.isLoading = true;

    this.countriesService.searchCapital( term )
      .subscribe( countries => {
        this.capitals = countries;
        this.isLoading = false;
      })

  }

}
