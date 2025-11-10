import { APP_ROUTES } from '../config/app-routes.config';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';

export const CV_ROUTES = [
  {
    path: APP_ROUTES.cv,
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddCvComponent },
      {
        path: ':id',
        component: DetailsCvComponent,
        data: {
          ma3louma: 'test data',
        },
      },
    ],
  },
];
