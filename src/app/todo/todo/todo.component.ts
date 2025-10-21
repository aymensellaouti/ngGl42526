import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

import { FormsModule } from '@angular/forms';
import { CvComponent } from '../../cv/cv/cv.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
  imports: [FormsModule, CvComponent, AsyncPipe, JsonPipe],
})
export class TodoComponent implements OnDestroy {
  private todoService = inject(TodoService);
  todos$ = this.todoService.getTodosFromApi();
  todosSignal = toSignal(this.todos$, {
    initialValue: [],
  });
  todos: Todo[] = [];
  /**
   * Le todo qui rerésente le formulaire d'ajout d'un todo
   */
  todo = new Todo();
  counter = signal(0);
  timer$ = timer(0, 1000);
  subscription!: Subscription;
  constructor() {
    this.todos = this.todoService.getTodos();
    this.timer$
    .pipe(takeUntilDestroyed())
    .subscribe({
      next: (value) => {
        this.counter.set(value);
        console.log(value);
      },
    });
  }
  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
