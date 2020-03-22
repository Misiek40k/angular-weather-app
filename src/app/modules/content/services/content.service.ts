import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) {

  }

  getCity(city): Observable<any> {
    return this.http.get(`https://www.metaweather.com/api/location/search/?query=${city}`)
  }
}
