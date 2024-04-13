import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Capital } from '../interfaces/capitals';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) {}

  searchCapital(term: string): Observable<Capital[]> {
    return this.http.get<Capital[]>(`${this.apiURL}/capital/${term}`)
      .pipe(
        catchError( error => {
          console.log(error);
          return of([])
        })
      );
  }

  searchCountry() {

  }

  searchRegion() {

  }

}

