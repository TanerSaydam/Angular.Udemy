import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrCurrencyPipe } from 'tr-currency';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TrCurrencyPipe],
  template:`
  <h1>Pipe</h1>
  <h1>{{name | titlecase | uppercase | lowercase}}</h1>
  <h1>{{date | date:'dd.MMMM.yyy HH:mm:ss'}}</h1>
  <h1>{{num | currency:'EUR':'symbol-narrow':'1.2-2'}}</h1>
  <h1>{{num | trCurrency: '₺': true}}</h1>
  `
})
export class AppComponent {
  name: string = "taner Saydam";
  date: Date = new Date();
  num: number = 17002.25;
}
