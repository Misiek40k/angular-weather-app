import { Component } from '@angular/core';
import { config } from 'assets/config'
import { ContentService } from '../../../services/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  subscription: Subscription;
  data = config.weather;
  currentCity;
  weathers;

  constructor(
    private contentService: ContentService,
  ) {
    this.subscription = this.contentService.showWeather().subscribe(weather => {
      this.currentCity = weather;
      this.weathers = weather.consolidated_weather;
    });
  }
}