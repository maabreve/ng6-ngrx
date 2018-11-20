import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../model/movie.model';
import { MoviesActionTypes } from '../../actions/movies.actions';

@Component({
  selector: 'app-movies-detail',
  templateUrl: 'movies-detail.component.html',
  styleUrls: ['movies-detail.component.css']
})

export class MoviesDetailComponent implements OnInit {
  private id: string;
  private movie: Movie;
  isLoading = true;

  constructor(private _store: Store<any>, private activatedRoute: ActivatedRoute,
            private movieService: MoviesService,
            private route: Router) {

    this.activatedRoute.params.subscribe(param => {
      this.id = param.id;
      this.movieService.getById(param.id).subscribe(movie => {
        this.movie = movie;
        this.isLoading = false;
        this._store.dispatch({
          type: MoviesActionTypes.GETMOVIEBYID,
          payload: movie
        });
      });
    });
  }

  ngOnInit() {
  }

  goToList() {
    this.route.navigate(['/movies']);
  }

}
