import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoPipe } from './todo.pipe';
import { NamePipe } from './name.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TodoPipe, NamePipe],
  template:`
  <h1>Pipe</h1>
  <div>
    <input [(ngModel)]="work">
    <button (click)="save()">Save</button>
  </div>
  <h1>{{name | name}}</h1>
  <div>
    <input type="search" [(ngModel)]="search" placeholder="Search something...">
    <ul>
      @for(t of todos | todo:search;track t){
        <li>{{t}}</li>
      }      
    </ul>
  </div>
  `
})
export class AppComponent {
  name: string = "Taner"
  work: string = "";
  todos: string[] = ["Domates","Armut","Elma"];
  search: string = "";

  save(){
    this.todos.push(this.work);
    this.work = "";
  }
}
