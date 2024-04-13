import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Capital } from '../interfaces/capitals';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) {}

  searchCountryByAlphaCode(code: string): Observable<Capital | null> {
    return this.http.get<Capital[]>(`${this.apiURL}/alpha/${code}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( () => of(null))
      );
  }

  searchCapital(term: string): Observable<Capital[]> {
    return this.http.get<Capital[]>(`${this.apiURL}/capital/${term}`)
      .pipe(
        catchError( error => {
          console.log(error);
          return of([])
        })
      );
  }

  searchCountry(term: string): Observable<Capital[]> {
    return this.http.get<Capital[]>(`${this.apiURL}/capital/${term}`)
      .pipe(
        catchError( error => {
          console.log(error);
          return of([])
        })
      );
  }

  searchRegion(region: string): Observable<Capital[]> {
    return this.http.get<Capital[]>(`${this.apiURL}/region/${region}`)
    .pipe(
      catchError( error => {
        console.log(error);
        return of([])
      })
    );
  }

}

