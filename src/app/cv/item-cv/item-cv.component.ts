import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css'],
  imports: [DefaultImagePipe],
})
export class ItemCvComponent {
  @Input({
    required: true,
  })
  cv!: Cv;
  cvService = inject(CvService);
  @Input() size = 50;
  onSelectCv() {
    this.cvService.selectCv(this.cv);
   // this.selectCv.emit(this.cv);
  }
}
