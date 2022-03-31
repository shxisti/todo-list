import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 todos:Todo[];
 localItem:string;
  constructor()
  {
    this.localItem=localStorage.getItem('todos');
    if(this.localItem==null){
      this.todos=[ ]
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
   
   }

  ngOnInit() {
  }
  deleteToDo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addToDo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos)); 

  }
  changeActive(todo:Todo){
    const index = this.todos.indexOf(todo);
   this.todos[index].active=!this.todos[index].active;
   localStorage.setItem("todos",JSON.stringify(this.todos));

  }

}
