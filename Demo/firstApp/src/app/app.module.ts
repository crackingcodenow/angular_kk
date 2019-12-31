import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { firstComponent } from "./app.component";
import { secondComponent } from "./app.component2";

@NgModule({
  declarations: [
    firstComponent, secondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [firstComponent]
})
export class AppModule { }
