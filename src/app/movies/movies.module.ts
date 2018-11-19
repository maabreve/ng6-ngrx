import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListItemComponent } from './components/movies-list-item/movies-list-item.component';
import { GenericListModule  } from '../generic-list/generic-list.module';
import { MoviesService } from './services/movies.service';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { moviesReducer } from './reducers/movies.reducers';

const COMPONENTS = [
  MoviesDetailComponent,
    MoviesListComponent,
    MoviesListItemComponent, ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    GenericListModule,
    MoviesRoutingModule,
    StoreModule.forFeature('moviesFeature', {
      movies: moviesReducer,
  })
  ],
  providers: [MoviesService],
  declarations: COMPONENTS,
  exports: COMPONENTS
})

export class MoviesModule { }
