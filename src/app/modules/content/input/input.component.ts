import { Component } from '@angular/core';
import { config } from 'assets/config';
import { ContentService } from '../../../services/content.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  placeholder: string = config.input.placeholder;

  inputControl = new FormControl('');

  constructor(
    private contentService: ContentService,
  ) { }

  change() {
    this.contentService.getCitiesList(this.inputControl.value);
  }
}
