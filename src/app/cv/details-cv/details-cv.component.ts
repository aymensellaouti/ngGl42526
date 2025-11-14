import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';

import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { APP_ROUTES } from '../../config/app-routes.config';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [],
})
export class DetailsCvComponent {
  acr = inject(ActivatedRoute);
  router = inject(Router);
  cvService = inject(CvService);
  cv = toSignal(
    this.acr.params.pipe(
      tap(params => console.log(params)),
      switchMap(params => this.cvService.findCvById(params['id'])),
      catchError((e) => {
        console.log(e);

        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      })
    )
  , {initialValue: null});
  constructor() {
    // const id = this.acr.snapshot.params['id'];
    // console.log(id);

    // this.acr.params.subscribe((params) => console.log('from subscription', params));
    // .subscribe({
    //   next: (cv) => {
    //     this.cv.set(cv);
    //   },
    //   error: (e) => this.router.navigate([APP_ROUTES.cv]),
    // });
    // if (!this.cv)
  }
  goTp2152() {
    this.router.navigate(['/cv', 1181])
  }
}
