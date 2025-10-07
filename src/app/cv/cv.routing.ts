import { APP_ROUTES } from '../config/app-routes.config';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';

export const CV_ROUTES = [
  {
    path: APP_ROUTES.cv,
    children: [
      { path: '', component: CvComponent },
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
