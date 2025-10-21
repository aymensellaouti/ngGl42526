import { Component, inject, Injector, signal } from '@angular/core';
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
import { AsyncPipe } from '@angular/common';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  imports: [CardCvComponent, EmbaucheComponent, ListComponent, TestRxjs, AsyncPipe],
})
export class CvComponent {
  private loggerService = inject(LoggerService);
  injector = inject(Injector);
  cvService = inject(CvService);
  cvsSignal = toSignal(this.cvService.getCvsFromApi(), {
    initialValue: [],
  });
  cvs$ = this.cvService.getCvsFromApi();
  cvs: Cv[] = [];
  cvRxResource = rxResource({
    params: () => ({}),
    stream: () => this.cvService.getCvsFromApi(),
    defaultValue: []
  });
  //selectedCv$ = this.cvService.selectedCv$;
  selectedCv = this.cvService.selectedCv;
  todoService = inject(TodoService);
  loggers = inject(LOGGER_TOKEN);
  // sayHelloService = new SayHelloService();
  //toastr = inject(ToastrService);
  constructor() {
    this.loggers.forEach((logger) => logger.logger('Cv Component'));
    // this.cvService.getCvsFromApi().subscribe({
    //   next: (cvs) => {
    //     this.cvsSignal.set(cvs);
    //     //this.cvs = cvs
    //   },
    // });
    //this.toastr.info('cc je suis le cvComponent :D');
  }
  test() {
    const x = toSignal(this.cvs$, { injector: this.injector });
  }
}
