import { Component, Injectable, Input, OnInit } from '@angular/core';

import { enableProdMode, Output, EventEmitter } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VERSION } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  template: `<app-weather></app-weather>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}


export class Weather {
  temperature: string = "";
  description: string = "";
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor() { }

  public saveWeather(weather: Weather) {
    console.log(`Temperature: ${weather.temperature} - Description: ${weather.description}`);
  }
}

@Component({
  selector: 'app-weather',
  template: `<div>
  <form (submit)="onSubmit()">
    <label> Description
      <input name="description" [(ngModel)]="weather.description">
    </label> 
    <br />
    <label> Temperature
      <input name="temperature" [(ngModel)]="weather.temperature">
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
</div>`,
})
export class WeatherComponent implements OnInit {
  weather: Weather;
  constructor(private weatherService: WeatherService) { this.weather = new Weather(); }

  ngOnInit() {

  }

  onSubmit() {
    this.weatherService.saveWeather(this.weather);
  }
}
