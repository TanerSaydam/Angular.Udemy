import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <nav>
  <a routerLink="/home">Home Page</a> ||
  <a routerLink="/about">About Page</a> ||
  <a routerLink="/contact">Contact Page</a> ||    
  </nav>
   <router-outlet></router-outlet>
  `
})
export class AppComponent {}
