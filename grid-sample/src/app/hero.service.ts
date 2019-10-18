import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Alias, Hero } from './models';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  url = 'api/heroes';

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url).pipe(
      tap(heroes => console.log(JSON.stringify(heroes))),
      catchError(this.handleError));
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero[]>(`${this.url}/?id=${id}`)
      .pipe(
        map((heroes) => heroes[0] as Hero),
        tap(hero => console.log(JSON.stringify(hero))),
        catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
