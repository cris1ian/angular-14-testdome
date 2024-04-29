import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, DeliveryDetails, StartsWithFilterPipe } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, StartsWithFilterPipe, DeliveryDetails],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
