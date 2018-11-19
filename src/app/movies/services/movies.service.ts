import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../model/movie.model';
import { CONFIG } from '../../config/app.config';

@Injectable({
  providedIn: 'root',
})

export class MoviesService {
  constructor(private _store: Store<any>, private http: HttpClient) {
  }

  getAll(page: number): Observable<Movie[]> {
    const url = `${CONFIG.theMovieDbURL}popular?api_key=${CONFIG.theMovieDbApiKey}&page=${page.toString()}`;
    return <Observable<Movie[]>> this.http.get(url);
  }

  getById(id: number): Observable<Movie> {
    const url = `${CONFIG.theMovieDbURL}${id}?api_key=${CONFIG.theMovieDbApiKey}`;
    return <Observable<Movie>> this.http.get(url);
  }

  search(query: string): Observable<Movie[]> {
    if (query && query.toString().trim() !== '') {
      const url = `${CONFIG.theMovieDbSearchUR}?api_key=${CONFIG.theMovieDbApiKey}&query=${query}`;
      return <Observable<Movie[]>> this.http.get(url);
    } else {
      return this.getAll(1);
    }
  }
}
