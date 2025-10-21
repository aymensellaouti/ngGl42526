import { Component, Input, input } from '@angular/core';
import { Observable, map, startWith, timer } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  standalone: true,
  imports: [AsyncPipe],
})
export class SliderComponent {
  timer = input(1500);
  imagePaths = input([
    'as.jpg',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ]);

  /* Todo : Créer le flux permettant de générer les images à afficher dans le slider */
  paths$: Observable<string> = timer(0, 1000).pipe(
    // 0 1 2 3 4 5 6 7 8 9 ....
    map((index) => this.imagePaths()[index % this.imagePaths().length])
    // img1 img2 .....
  );
}
