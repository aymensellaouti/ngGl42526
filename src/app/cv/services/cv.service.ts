import { inject, Injectable, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs = [
    new Cv(1, 'aymen', 'sellaouti', 'teacher', '1234', 'as.jpg', 40),
    new Cv(2, 'skander', 'sellaouti', 'enfant', '1234', '       ', 4),
  ];

  /**
   * Flux des cvs sélectionnés
   */
  #selectedCvSubject$ = new Subject<Cv>();
  /**
   * L'observable des cvs sélectionnés
   */
  selectedCv$ = this.#selectedCvSubject$.asObservable();

  #selectedCv = signal<Cv | null>(null);
  selectedCv = this.#selectedCv.asReadonly();

  http = inject(HttpClient);

  getCvsFromApi(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Cv[] {
    return this.cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }

  /**
   * Ajoute un cv fel flux des cvs sélectionnés
   * @param cv : le cv sélectionné
   */
  selectCv(cv: Cv) {
    //this.#selectedCvSubject$.next(cv);
    this.#selectedCv.set(cv);
  }
}
