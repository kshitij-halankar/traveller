import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeightConverterComponent } from './features/weight-converter/views/weight-converter/weight-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightConverterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
