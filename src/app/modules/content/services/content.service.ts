import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { config } from 'app/shared/config'

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  private subject = new Subject<any>();

  getCity(city): Observable<any> {
    return this.http.get(`${config.corsBypass}${config.api.search}${city}`).pipe(
      map(res => this.subject.next(res))
    )
  }

  showCity(): Observable<any> {
    return this.subject.asObservable();
  }

  getWeather(cityId): Observable<any> {
    return this.http.get(`${config.corsBypass}${config.api.searchId}${cityId}`);
  }
}
