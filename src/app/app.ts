import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gl42526');
  protected title2 = 'T2';

  constructor() {
    setTimeout(() => {
      // this.title.set('change');
      this.title2 = 'T2 jdid';
    }, 2500);
  }
}
