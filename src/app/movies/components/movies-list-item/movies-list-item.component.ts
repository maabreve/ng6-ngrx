import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list-item',
  templateUrl: 'movies-list-item.component.html',
  styleUrls: ['movies-list-item.component.css']
})

export class MoviesListItemComponent {
  @Input() movie;
  constructor(private route: Router) {
  }

  goToDetails(id) {
    this.route.navigate(['/movie', id]);
  }
}
