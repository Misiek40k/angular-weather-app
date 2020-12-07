import { Component } from '@angular/core';
import { config } from 'assets/config';
import { ContentService } from '../../../services/content.service';
import { Weather } from '../../../models/weather';
import { City } from '../../../models/city';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  data = config.weather;

  get currentWeathersList(): Array<Weather> {
    if (this.contentService.weatherList) {
      return this.contentService.weatherList;
    } else {
      return null;
    }
  }

  get currentCity(): City {
    if (this.contentService.currentCity) {
      return this.contentService.currentCity;
    } else {
      return null;
    }
  }

  constructor(
    private contentService: ContentService,
  ) {}
}
