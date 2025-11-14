import { Routes } from '@angular/router';
import { Two } from './components/two/two';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404 } from './components/nf404/nf404';
import { Cv } from './cv/model/cv';
import { CV_ROUTES } from './cv/cv.routing';
import { Back } from './components/back/back';
import { StartCdComponent } from './change Detection/start-cd/start-cd.component';

export const routes: Routes = [
  { path: '', loadComponent: ()=> import('./components/two/two').then(m =>m.Two) },
  { path: 'cd', component: StartCdComponent},
  {
    path: 'back',
    component: Back,
    children: [{ path: 'todo', component: TodoComponent }],
  },
  ...CV_ROUTES,
  {
    path: '**',
    component: NF404,
  },
];
