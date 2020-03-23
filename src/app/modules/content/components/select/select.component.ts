import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  options: Array<Object> = [];
  subscription: Subscription;

  constructor(
    private contentService: ContentService,
  ) {
    this.subscription = this.contentService.showCity().subscribe(options => {
      this.options = options;
    });
  }

  onChange(id) {
    this.contentService.getWeather(id).subscribe();
  }
}
