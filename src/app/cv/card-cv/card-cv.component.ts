import { Component, inject, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card-cv',
  templateUrl: './card-cv.component.html',
  styleUrls: ['./card-cv.component.css']
})
export class CardCvComponent {
  @Input()
  cv: Cv | null = null;
  emaucheService = inject(EmbaucheService);
  toastrService = inject(ToastrService);
  embaucher() {
    if (this.cv) {
      if(this.emaucheService.embaucher(this.cv)){
        this.toastrService.success(`
          ${this.cv.firstname} ${this.cv.name} a été pré sélectionné avec succès
          `)
      } else {
        this.toastrService.warning(`
          ${this.cv.firstname} ${this.cv.name} est déjà pré sélectionné
          `);
      }
    }
  }
}
