import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { ItemCvComponent } from '../item-cv/item-cv.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  imports: [ItemCvComponent],
})
export class ListComponent {
  @Input()
  cvs: Cv[] = [];
  @Output()
  forwardCv = new EventEmitter<Cv>();
}
