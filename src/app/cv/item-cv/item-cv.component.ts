import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

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
  @Output()
  selectCv = new EventEmitter<Cv>();
  @Input() size = 50;
  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
