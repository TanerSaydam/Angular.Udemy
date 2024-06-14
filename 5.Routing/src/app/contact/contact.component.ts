import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
constructor(
  private activated: ActivatedRoute
){
  this.activated.params.subscribe((res)=> {
    console.log(res['params']);
    
  })
}


}
