import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypedFormDemoComponent } from './typed-form-demo/typed-form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TypedFormDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
