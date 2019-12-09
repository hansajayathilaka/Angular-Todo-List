import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Todo} from 'src/models/Todo';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClass() {
    return {
      todo: true,
      'is-complete': this.todo.completed
    };
  }

  toggled(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle in Server
    this.todoService.toggleCompleted(todo).subscribe(todos => {
      console.log(todos);
    });
  }

  clicked(todo) {
    this.deleteTodo.emit(todo);
  }
}
