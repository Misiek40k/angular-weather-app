import { Component } from '@angular/core';
import { ContentService } from '../../../services/content.service';
import { City } from '../../../models/city';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  get curentCitiesList(): City[] {
    if (this.contentService.citiesList) {
      return this.contentService.citiesList;
    } else {
      return null;
    }
  }

  constructor(
    private contentService: ContentService,
  ) {}

  onCitySelectChange(city: City): void {
    this.contentService.getWeatherList(city);
  }
}
