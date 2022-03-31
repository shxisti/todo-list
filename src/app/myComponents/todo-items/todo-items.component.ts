import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo:Todo;
  @Input() i:number;

  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() todoCheckBox:EventEmitter<Todo>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log('onClick Method has been called');
  }
  onCheckBoxClick(todo:Todo){
    console.log(todo);
    this.todoCheckBox.emit(todo);


  }

}
