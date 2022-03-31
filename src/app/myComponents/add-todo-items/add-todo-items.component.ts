import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo-items',
  templateUrl: './add-todo-items.component.html',
  styleUrls: ['./add-todo-items.component.css']
})
export class AddTodoItemsComponent implements OnInit {
  title:string;
  desc:string;
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  onSubmit()
 {
     const todo={
     sno:4,
    title:this.title,
    desc:this.desc,
    active:true
   }
   this.todoAdd.emit(todo);
 }

}
