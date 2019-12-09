import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  setClass() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  toggled(todo) {
    todo.completed = !todo.completed;
  }

  clicked(todo) {
    console.log('clicked');
  }

}
