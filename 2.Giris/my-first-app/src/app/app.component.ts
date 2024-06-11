import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  helloWorld:string = "Hello, world from TS!!";
  pClassName: string = "blue";

  clickMe(){
    alert("Beni tıkladın....")
  }

  changeHelloWorldVariable(event:any){
    this.helloWorld = event.target.value;
  }

  setPElementClass(){
    return "blue";
  }
}
