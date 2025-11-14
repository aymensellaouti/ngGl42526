import { ResolveFn } from '@angular/router';
import { Todo } from './model/todo';
import { inject } from '@angular/core';
import { TodoApi, TodoService } from './service/todo.service';

export const todoResolver: ResolveFn<TodoApi[]> = (route, state) => {
  // Kifech njib edata
  return inject(TodoService).getTodosFromApi();
};
