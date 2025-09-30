import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Two } from './components/two/two';
import { Som } from './components/som/som';
import { Pere } from './communication/pere/pere';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv/cv.component';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    Two,
    Som,
    Pere,
    TodoComponent,
    CvComponent,
    WeekTodoComponent,
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // state
  protected readonly title = signal('gl42526');
  protected title2 = 'T2';
  protected isHidden = signal(false);
  constructor() {
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
