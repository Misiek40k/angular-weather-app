import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  subscription: Subscription;
  weather: Object;

  constructor(
    private contentService: ContentService,
  ) {
    this.subscription = this.contentService.showWeather().subscribe(weather => {
      this.weather = weather;
      console.log(this.weather);
    });
  }
}
