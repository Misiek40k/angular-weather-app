import { Component } from '@angular/core';
import { config } from '../../shared/config';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  title: string = config.title.title;
  subtitle: string = config.title.subtitle;
}
