import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesDetailComponent } from './components/movies-detail/movies-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies' },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movie/:id', component: MoviesDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MoviesRoutingModule {}
