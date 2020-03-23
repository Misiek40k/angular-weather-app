import { Component, Input } from '@angular/core';
import { config } from 'app/shared/config'

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent {
  @Input() weather;
  data = config.weather.item
}
