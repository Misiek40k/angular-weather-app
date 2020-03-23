import { Component } from '@angular/core';
import { config } from 'app/shared/config'
import { ContentService } from '../../services/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  subscription: Subscription;
  data  = config.weather;
  weather;

  constructor(
    private contentService: ContentService,
  ) {
    this.subscription = this.contentService.showWeather().subscribe(weather => {
      this.weather = weather;
    });
  }
}
