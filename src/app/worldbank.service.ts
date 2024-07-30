import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorldbankService {
  private baseUrl = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  getCountryData(countryName: string): Observable<any> {
    const url = `${this.baseUrl}/${countryName}?format=json`;
    return this.http.get(url);
  }
}
