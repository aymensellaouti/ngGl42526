import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Input({
    required: true
  })
  cv!: Cv;
  @Output()
  selectCv = new EventEmitter<Cv>();
  @Input() size = 50;
  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}
