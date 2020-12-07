import { Component } from '@angular/core';
import { config } from 'assets/config'
import { ContentService } from '../../../services/content.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  placeholder: string = config.input.placeholder;
  value = '';

  constructor(
    private contentService: ContentService,
  ) { }

  change(value: string) {
    this.value = value;

    this.contentService.getCity(this.value).subscribe();
  }
}