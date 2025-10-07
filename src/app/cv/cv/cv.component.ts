import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';

import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { LoggerService } from '../../services/logger.service';
import { TodoService } from '../../todo/service/todo.service';
import { CardCvComponent } from '../card-cv/card-cv.component';
import { EmbaucheComponent } from '../embauche/embauche.component';
import { ListComponent } from '../list/list.component';
import { LOGGER_TOKEN } from '../../injection tokens/logger.injection-token';
import { TestRxjs } from "../../rxjs/test-rxjs/test-rxjs";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  imports: [CardCvComponent, EmbaucheComponent, ListComponent, TestRxjs],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvService = inject(CvService);
  cvs: Cv[] = this.cvService.getCvs();
  todoService = inject(TodoService);
  loggers = inject(LOGGER_TOKEN);
  // sayHelloService = new SayHelloService();
  //toastr = inject(ToastrService);
  constructor(private loggerService: LoggerService) {
    this.loggers.forEach((logger) => logger.logger('Cv Component'));
    //this.toastr.info('cc je suis le cvComponent :D');
  }
}
