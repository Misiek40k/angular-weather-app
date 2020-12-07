import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { ContentComponent } from './content/content.component';
import { SharedModule } from '../shared/shared.module';

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
    SharedModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule {}
