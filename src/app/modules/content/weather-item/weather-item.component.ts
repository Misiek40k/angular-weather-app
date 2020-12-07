import { Component, Input } from '@angular/core';
import { config } from 'assets/config';
import { Weather } from '../../../models/weather';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent {

  @Input() weather: Weather;

  data = config.weather.item;
}
