import { Component, OnInit } from '@angular/core';
import { config } from '../../shared/config';
import { faCloud as icon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerIco = icon;
  headerTxt = config.header.txt

  ngOnInit() {
  }
}
