import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as moviesReducer from '../movies/reducers/movies.reducers';
import * as genericListReducer from '../generic-list/reducers/generic-list.reducers';


export interface State {
  movies: moviesReducer.State;
  genericList: genericListReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  movies:   moviesReducer.moviesReducer,
  genericList: genericListReducer.genericListReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

export const getMoviesState = createFeatureSelector<State, moviesReducer.State>(
  'movies'
);

export const getGenericListState = createFeatureSelector<State, genericListReducer.State>(
  'genericList'
);

export const getMovies = createSelector(
  getMoviesState,
  moviesReducer.getMovies
);

export const getGenericListPagination = createSelector(
  getGenericListState,
  genericListReducer.getPagination
);

export const getGenericListSearch = createSelector(
  getGenericListState,
  genericListReducer.getSearchText
);
