import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = "";
  
  constructor(
    private router: Router
  ){}

  checkStatus(){}

  logout(){
    //localStorage.clear();
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }
}
