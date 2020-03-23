import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { InputComponent } from './components/input/input.component';
import { ContentService } from './services/content.service';
import { SelectComponent } from './components/select/select.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';

@NgModule({
  declarations: [
    ContentComponent,
    InputComponent,
    SelectComponent,
    WeatherComponent,
    WeatherItemComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ContentComponent,
  ],
  providers: [ContentService]
})
export class ContentModule { }
