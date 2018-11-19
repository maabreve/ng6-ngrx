import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GenericListActionTypes } from '../../actions/generic-list.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as genericListActions from '../../actions/generic-list.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent {
  options: FormGroup;

  constructor(private store: Store<any>, fb: FormBuilder) {
    this.options = fb.group({
      color: 'primary',
      fontSize: [22, Validators.min(10)],
      fontStyle: 'italic'
    });
  }

  onSearchChange(value: string) {
    this.store.dispatch(new genericListActions.LoadSearch(value));
  }
}
