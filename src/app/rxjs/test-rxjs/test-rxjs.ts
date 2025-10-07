import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-rxjs',
  imports: [AsyncPipe],
  templateUrl: './test-rxjs.html',
  styleUrl: './test-rxjs.css',
})
export class TestRxjs {
  private toaster = inject(ToastrService);
  // compteArebours = signal(5);

  firstObservable$: Observable<number>;

  constructor() {
    /**
     * Flux d'un compte à rebours de 5 à 1
     */
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.firstObservable$.subscribe({
      next: (valeurJdida) => console.log(valeurJdida),
    });
    // setTimeout(() => {
      this.firstObservable$
      .pipe(
        // 5 4 3 2 1
        map(data => data * 3),
        // 15 12 9 6 3
        filter(data => !(data%2))
        // 12 6
      )
      .subscribe({
        next: (valeurJdida) => this.toaster.info('' + valeurJdida),
        complete: () => this.toaster.error('BOOOOOM!!!!'),
      });
    // }, 3000);
    // this.firstObservable$.subscribe({ next: (data) => {
    //   console.log(data); this.compteArebours.set(data);
    // } });
  }
}
