import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';

import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { LoggerService } from '../../services/logger.service';
import { TodoService } from '../../todo/service/todo.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvService = inject(CvService);
  cvs: Cv[] = this.cvService.getCvs();
  todoService = inject(TodoService);
  // sayHelloService = new SayHelloService();
  toastr = inject(ToastrService);
  constructor(
    private loggerService: LoggerService,
  ) {
    this.toastr.info('cc je suis le cvComponent :D');
  }
}
