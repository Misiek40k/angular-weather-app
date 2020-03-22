import { Component } from '@angular/core';
import { config } from 'app/shared/config'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  placeholder: string = config.input.placeholder
}
