import { Routes } from '@angular/router';
import { Two } from './components/two/two';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';

import { Cv } from './cv/model/cv';
import { CV_ROUTES } from './cv/cv.routing';


import { todoResolver } from './todo/todo-resolver-resolver';
import { APP_ROUTES } from './config/app-routes.config';

export const routes: Routes = [
  { path: '', loadComponent: ()=> import('./components/two/two').then(m =>m.Two) },
  { path: 'cd', loadComponent: () => import('./change Detection/start-cd/start-cd.component').then(m => m.StartCdComponent)},
  {
    path: 'back',
    loadComponent: () => import('./components/back/back').then(m => m.Back),
    children: [
      {
        path: 'todo',
        loadComponent: () => import('./todo/todo/todo.component').then(
          module => module.TodoComponent
        ),
        resolve: {
          todos: todoResolver
        }
      }
    ],
  },
  {
    path: APP_ROUTES.cv,
    loadChildren: () => import('./cv/cv.routing').then(
      module => module.CV_ROUTES
    ),
    data: {
      preload: true
    }
  },
  {
    path: '**',
    loadComponent: () => import('./components/nf404/nf404').then(m => m.NF404),
  },
];
