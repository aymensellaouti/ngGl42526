import { Component, inject } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

import { FormsModule } from '@angular/forms';
import { CvComponent } from '../../cv/cv/cv.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
  imports: [FormsModule, CvComponent, AsyncPipe, JsonPipe],
})
export class TodoComponent {
  private todoService = inject(TodoService);
  todos$ = this.todoService.getTodosFromApi();
  todosSignal = toSignal(this.todos$, {
    initialValue: []
  });
  todos: Todo[] = [];
  /**
   * Le todo qui rerésente le formulaire d'ajout d'un todo
   */
  todo = new Todo();
  constructor() {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
