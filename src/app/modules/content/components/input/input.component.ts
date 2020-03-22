import { Component } from '@angular/core';
import { config } from 'app/shared/config'
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  cities;
  placeholder: string = config.input.placeholder;
  value = '';

  constructor(
    private contentService: ContentService,
  ) { }

  change(value: string) {
    this.value = value;


    this.contentService.getCity(this.value).subscribe(input=>{
      this.cities = input
    });

    console.log(this.cities);
  }
}
