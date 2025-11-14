import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class CustomPreloadingStrategy implements PreloadingStrategy{
  preload(route: Route, preload: () => Observable<any>): Observable<any> {
    // ay route lazy loded tet3ada men hna
    console.log({route});

    if (route?.data && route.data['preload'])
      // itha kan nraja3 preload ma3naha prechargi
      return preload();
    // itha kan nraja3 of(null) => ma tpreloadich
    return of(null)
  }
}
