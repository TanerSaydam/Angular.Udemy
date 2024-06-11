import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template:`
  <h1>Döngüler</h1>
  <ul>
    @for(data of todos;track data){
      <li>
        İndex: {{ $index }} || 
        İlk Kayıt mı?: {{ $first }} || 
        Son Kayıt mı?: {{ $last }} || 
        Veri: {{data.work}}</li>
    }    
  </ul>

  `
})
export class AppComponent {
 todos: TodoModel[] = [
  {work:"Example 1", isCompleted: true},
  {work:"Example 2", isCompleted: true},
  {work:"Example 3", isCompleted: true},
 ]

 constructor(){
  this.save();
 }

 save(){
  console.log("------ For döngüsü ---------------");

  for(let i = 0; i < 10; i++){
    console.log(i);
  }

  console.log("------ Listeyi For ile dönme ---------------");
  

  for(let i = 0; i < this.todos.length; i++){
    console.log(this.todos[i].work);    
  }

  console.log("------ listeyi foreach ile dönme ---------------");

  this.todos.forEach((val)=> {
    console.log(val.work);
    console.log(val.isCompleted);    
  })

  console.log("------ Listeyi for of ile dönme ---------------");

  for(let data of this.todos){
    //for of  da async kodlama yapabiliyoruz
    console.log(data.work);
    console.log(data.isCompleted);    
  }

  console.log("------ Listeyi for in ile dönme ---------------");

  for(let index in this.todos){
    console.log(index);    
  }
 }
}

export class TodoModel{
  work: string = "";
  isCompleted: boolean = false;
}
