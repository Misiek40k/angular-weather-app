import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from 'assets/config';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  private citySubject = new Subject<any>();
  private weatherSubject = new Subject<any>();

  getCity(city): Observable<any> {
    return this.http.get(`${config.corsBypass}${config.api.search}${city}`).pipe(
      map(res => this.citySubject.next(res))
    );
  }

  showCity(): Observable<any> {
    return this.citySubject.asObservable();
  }

  getWeather(cityId): Observable<any> {
    return this.http.get(`${config.corsBypass}${config.api.searchId}${cityId}`).pipe(
      map(res => this.weatherSubject.next(res))
    );
  }

  showWeather(): Observable<any> {
    return this.weatherSubject.asObservable();
  }
}
