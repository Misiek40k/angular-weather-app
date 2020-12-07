import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city';
import { Weather } from '../models/weather';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  currentCity: City;
  citiesList: City[];
  weatherList: Weather[];

  constructor(
    private http: HttpClient
  ) {}

  getCitiesList(input: string): void {
    this.http.get<Array<City>>(environment.corsBypass + environment.search + input)
      .subscribe(citiesList => {
        this.citiesList = citiesList;
      });
  }

  getWeatherList(city: City): void {
    this.currentCity = city;

    this.http.get<Array<Weather>>(environment.corsBypass + environment.searchId + city.woeid)
      .subscribe(weatherList => {
          this.weatherList = weatherList;
        }
      );
  }
}
