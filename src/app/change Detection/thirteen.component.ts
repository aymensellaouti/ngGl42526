import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
  inject,
  signal,
} from '@angular/core';
import { BaseNodeComponent } from './base-node.component';
import { CounterService } from './services/counter.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-thirteen',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <span  class="node-label" [style.background-color]="color"
      >13 - {{ counterService.counter() }}</span
    >
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ThirteenComponent extends BaseNodeComponent {
  //counter = 0;
  //counterBs = new BehaviorSubject<number>(0);
  //counter$ = this.counterBs.asObservable();
  counterSignal = signal(0);

  host = inject(ElementRef);
  counterService = inject(CounterService);

  constructor() {
    super();
    // setInterval(() => {
    //   this.counterSignal.update(value => value + 1)
    // }, 1000)
    fromEvent(this.host.nativeElement, 'click').subscribe(() => {
      this.counterService.increaseCounter();
    });
  }

  increaseCounter() {
    this.counterSignal.update((val) => val + 1);
    // this.counterService.increaseCounter();
  }
}
