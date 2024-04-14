import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Capital } from '../interfaces/capitals';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  private apiURL: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }

  constructor( private http: HttpClient ) {}

  private getCountriesRequest(url: string): Observable<Capital[]> {
    return this.http.get<Capital[]>(url)
      .pipe(
        catchError( () => of([])),
        // delay( 2000 )
      );
  }

  searchCountryByAlphaCode(code: string): Observable<Capital | null> {
    return this.http.get<Capital[]>(`${this.apiURL}/alpha/${code}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( () => of(null))
      );
  }

  searchCapital(term: string): Observable<Capital[]> {
    const url = `${ this.apiURL }/capital/${ term }`;
    return this.getCountriesRequest( url )
      .pipe(
        tap( countries => this.cacheStore.byCapital = { term: term, countries: countries } )
      );
  }

  searchCountry(term: string): Observable<Capital[]> {
    const url = `${ this.apiURL }/name/${ term }`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term: term, countries: countries } )
    );
  }

  searchRegion(region: Region): Observable<Capital[]> {
    const url = `${ this.apiURL }/region/${ region }`;
    return this.getCountriesRequest( url )
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region: region, countries: countries } )
    );
  }

}

