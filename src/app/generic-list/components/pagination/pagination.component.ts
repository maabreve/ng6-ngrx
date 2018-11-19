import { Component, Input, OnInit } from '@angular/core';
import { PagerService } from '../../services/pagination.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/movies/model/movie.model';
import { Store } from '@ngrx/store';
import { GenericListActionTypes } from '../../actions/generic-list.actions';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.css']
})

export class PaginationComponent implements OnInit {
  private allItems: any;
  pager: any = {};
  items: Movie;
  @Input() moviesList$: Observable<Movie>;
  @Input() movieslist: string;
  @Input() source: string;

  constructor(private store: Store<any>, private pagerService: PagerService) {
  }

  ngOnInit(): void {
    if (this.moviesList$) {
      this.moviesList$.subscribe(movies => {
        this.allItems = movies;
        console.log('pagination ', movies);
        this.setPage(1);
      });
    }
  }

  setPage(page: number) {
    if (this.allItems) {
      this.pager = this.pagerService.getPager(this.allItems.total_results, page);
    } else {
      this.pager = this.pagerService.getPager(0, 1);
    }

    this.store.dispatch({
      type: GenericListActionTypes.PAGINATION,
      payload: page
    });
  }
}
