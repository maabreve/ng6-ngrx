import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../model/movie.model';
import { MoviesActionTypes } from '../../actions/movies.actions';
import { Observable } from 'rxjs';
import * as rootReducer from '../../../store';

@Component({
  selector: 'app-movies-list',
  templateUrl: 'movies-list.component.html',
  styleUrls: ['movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
  moviesList$: Observable<Movie[]>;
  moviesList: Array<Movie> = [];
  moviesListRepo: Array<Movie> = [];

  constructor(private store: Store<rootReducer.State>, private router: Router,
    private movieService: MoviesService) {
  }

  ngOnInit() {
    this.moviesList$ = this.movieService.getAll(1);
    this.moviesList$.subscribe(movies => {
      this.loadMovies(movies);
    });


    // search listener
    this.store.select(rootReducer.getGenericListSearch).subscribe(searchText => {
      console.log(searchText);
      this.moviesList$ = this.movieService.search(searchText);
      this.moviesList$.subscribe(searchResult => {
        this.loadMovies(searchResult);
      });
    });

    // pagination listener
    this.store.select(rootReducer.getGenericListPagination).subscribe(page => {
      if (page) {
        console.log(page);
        this.moviesList$ = this.movieService.getAll(page);
        this.moviesList$.subscribe(searchResult => {
          this.loadMovies(searchResult);
        });
      }
    });
  }

  loadMovies(movies) {
    this.moviesList = movies;
    // dispatch to store
    this.store.dispatch({
      type: MoviesActionTypes.GETMOVIES,
      payload: movies
    });
  }
}
