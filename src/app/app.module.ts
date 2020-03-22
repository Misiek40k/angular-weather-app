import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { TitleComponent } from './layout/title/title.component';
import { ContentModule } from './modules/content/content.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ContentModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCloud);
  }
}
