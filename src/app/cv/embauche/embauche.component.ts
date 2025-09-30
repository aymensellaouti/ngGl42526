import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ItemCvComponent } from '../item-cv/item-cv.component';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
  imports: [ItemCvComponent],
})
export class EmbaucheComponent {
  embaucheService = inject(EmbaucheService);
  public embauchees: Cv[] = this.embaucheService.getEmbauchees();
}
