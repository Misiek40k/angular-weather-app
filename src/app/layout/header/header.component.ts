import { Component, OnInit } from '@angular/core';
import { faCloud as icon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerIco = icon;
  headerTxt = 'Angular Weather App'

  ngOnInit() {
  }
}
