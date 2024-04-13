import { Component, Input } from '@angular/core';
import { Capital } from '../../interfaces/capitals';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
  img {
    width: 25px;
  }`
})
export class CountryTableComponent {

  @Input()
  public capitals: Capital[] = [];



}
