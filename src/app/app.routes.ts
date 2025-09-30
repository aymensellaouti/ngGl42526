import { Routes } from '@angular/router';
import { Two } from './components/two/two';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';

export const routes: Routes = [
  { path: '', component: Two },
  { path: 'todo', component: TodoComponent },
  { path: 'cv', component: CvComponent },
];
