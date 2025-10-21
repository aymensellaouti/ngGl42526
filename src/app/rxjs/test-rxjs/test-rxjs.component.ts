import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test-rxjs',
  templateUrl: './test-rxjs.component.html',
  styleUrls: ['./test-rxjs.component.css'],
})
export class TestRxjsComponent {
  myObservable$: Observable<number>;
  toastr = inject(ToastrService);
  countDown = 0;
  constructor() {
    // 5 4 3 2 1
    this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });

    this.myObservable$
    .pipe(takeUntilDestroyed())
    .subscribe((val) => {
      console.log(val);
    });
    // setTimeout(
    //   () => {
    this.myObservable$
      .pipe(
        // 5 4 3 2 1
        map((data) => data * 3),
        // 15 12 9 6 3
        filter((data) => !(data % 2))
        // 12 6
      )
      .subscribe({
        next: (data) => {
          this.toastr.info('' + data);
        },
        complete: () => {
          this.toastr.warning('BOOOM !!!!');
        },
      });
    //       },
    //       3000
    //     )
  }
}
