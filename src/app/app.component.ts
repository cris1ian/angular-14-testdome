import { Component, Pipe, PipeTransform } from '@angular/core';

import { enableProdMode, Output, EventEmitter } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VERSION } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  template: `<app-root></app-root>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}

@Pipe({
  name: 'startsWithFilterPipe',
  pure: false
})
export class StartsWithFilterPipe implements PipeTransform {
  transform(array: string[], startingString: string): string[] {
    const filteredArray: string[] = array.filter(elem => elem.startsWith(startingString));
    return filteredArray
  }
}

@Component({
  selector: 'app-root',
  template: `<h1>{{ ["City: New York", "City details: None", "Cargo type: fragile"] | startsWithFilterPipe:"Ci" }}</h1>`,
  styles: []
})
export class DeliveryDetails {
  handleStateChange(event: any) {
    console.log(event);
  }
}
