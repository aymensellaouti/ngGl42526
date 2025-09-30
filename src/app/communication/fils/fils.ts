import { Component, input, Input, output } from '@angular/core';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-fils',
  imports: [Highlight],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class Fils {
  messageDePapa = input.required();

  njawebBaba = output<string>();
}
