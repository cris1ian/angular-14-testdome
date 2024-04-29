import { Component } from '@angular/core';

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

@Component({
  selector: 'app-root',
  template: `<div>
    <darkmode-toggler (stateChanged)="handleStateChange($event)"></darkmode-toggler>
  </div>`,
  styles: []
})
export class Resource {
  handleStateChange(event: any) {
    console.log(event);
  }
}

@Component({
  selector: 'darkmode-toggler',
  template: `<div>
    <button (click)="onClick($event)">Toggle dark mode</button>
    <p>{{darkModeActive ? "active" : "disabled"}}</p>
  </div>`,
  styles: []
})
export class DarkModeToggler {
  @Output() stateChanged: EventEmitter<string> = new EventEmitter<string>();
  darkModeActive: boolean = false;

  onClick = (event: any) => {
    this.darkModeActive = !this.darkModeActive;
    this.stateChanged.emit(this.darkModeActive ? "active" : "disabled");
  }
}