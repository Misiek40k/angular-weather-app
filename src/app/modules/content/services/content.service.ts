import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from 'app/shared/config'

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  getCity(city): Observable<any> {
    return this.http.get(`${config.corsBypass}${config.api.search}${city}`)
  }
}
