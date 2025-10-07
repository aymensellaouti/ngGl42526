import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { APP_ROUTES } from '../../config/app-routes.config';

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe],
})
export class DetailsCvComponent {
  cv: Cv | null = null;
  acr = inject(ActivatedRoute);
  router = inject(Router);
  cvService = inject(CvService);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cv = this.cvService.findCvById(id);
    if (!this.cv) this.router.navigate([APP_ROUTES.cv]);
  }
}
