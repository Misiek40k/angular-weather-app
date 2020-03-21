import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  title = 'Choose your city';
  subtitle = 'and check the current weather';

  ngOnInit(): void {
  }

}
