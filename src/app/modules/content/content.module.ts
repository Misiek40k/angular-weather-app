import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [ContentComponent, InputComponent,],
  imports: [
    CommonModule,
  ],
  exports: [
    ContentComponent,
  ]
})
export class ContentModule { }
