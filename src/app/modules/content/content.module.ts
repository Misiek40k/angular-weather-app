import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { InputComponent } from './components/input/input.component';
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [ContentComponent, InputComponent,],
  imports: [
    CommonModule,
  ],
  exports: [
    ContentComponent,
  ],
  providers: [ContentService]
})
export class ContentModule { }
