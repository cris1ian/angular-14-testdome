import { Component, Input, OnInit } from '@angular/core';

import { enableProdMode, Output, EventEmitter } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { VERSION } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  template: `<app-root [count]=4></app-root>`,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}

@Component({
  selector: 'app-root',
  template: `
  <table>
    <tbody>
      <tr>
        <td *ngFor="let card of [].constructor(count); let i = index" (click)="onCardClick(i)">
          {{i===selectedCard?"up":"down"}}
        </td>
      </tr>
    </tbody>
  </table>
  `,
  styles: []
})
export class Cards implements OnInit {
  @Input() count: number = 0;
  selectedCard: number = -1;

  ngOnInit() {
    console.log(this.count);
  }

  onCardClick(index: number) {
    this.selectedCard = index;
  }
}
