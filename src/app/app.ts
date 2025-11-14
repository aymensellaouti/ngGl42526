import { Component, inject, signal } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { Two } from './components/two/two';
import { Som } from './components/som/som';
import { Pere } from './communication/pere/pere';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestFormComponent } from './form/test-form/test-form.component';


import { timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StartCdComponent } from "./change Detection/start-cd/start-cd.component";
import { NgxUiLoaderComponent, NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { DeferComponent } from "./defer/defer/defer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NgxUiLoaderModule, DeferComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // state
  protected readonly title = signal('gl42526');
  protected title2 = 'T2';
  protected isHidden = signal(false);
  private http = inject(HttpClient);
  private router = inject(Router);
  private ngxService = inject(NgxUiLoaderService);
  constructor() {
    // this.router.events.subscribe({
    //   next: (event) => {
    //     if (event instanceof NavigationStart) {
    //       this.ngxService.start();
    //     } else if (
    //       event instanceof NavigationEnd ||
    //       event instanceof NavigationError ||
    //       event instanceof NavigationCancel
    //     ) {
    //       this.ngxService.stop();
    //     }
    //   },
    // });
    // this.http.get('http://localhost:3000/todo').subscribe((todos) => {
    //   console.log({ todos });
    // });
    // setTimeout(() => {
    //   this.title.set('change');
    //   this.title2 = 'T2 jdid';
    // }, 2500);
  }

  // behaviour
  showHide() {
    this.isHidden.update((valeurActuelle) => !valeurActuelle);
  }
}
