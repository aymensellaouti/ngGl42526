import { Component } from '@angular/core';
import { Fils } from '../fils/fils';

@Component({
  selector: 'app-pere',
  imports: [Fils],
  templateUrl: './pere.html',
  styleUrl: './pere.css',
})
export class Pere {
  handleRequest(message: string) {
    alert(`thab ${message}, essoug ejjay :D`);
  }
}
