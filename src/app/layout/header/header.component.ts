import { Component } from '@angular/core';
import { config } from '../../shared/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerIco = config.header.ico;
  headerTxt = config.header.txt
}
