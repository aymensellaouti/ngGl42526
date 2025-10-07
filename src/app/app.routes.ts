import { Routes } from '@angular/router';
import { Two } from './components/two/two';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404 } from './components/nf404/nf404';
import { Cv } from './cv/model/cv';
import { CV_ROUTES } from './cv/cv.routing';
import { Back } from './components/back/back';

export const routes: Routes = [
  { path: '', component: Two },
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
