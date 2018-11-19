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


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  movies: moviesReducer.State;
  genericList: genericListReducer.State;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  movies:   moviesReducer.moviesReducer,
  genericList: genericListReducer.genericListReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];

/**
 * Layout Reducers
 */
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

// import { combineReducers } from '@ngrx/store';
// import { createSelector } from 'reselect';

// import * as moviesReducer from '../movies/reducers/movies.reducers';
// import * as genericListReducer from '../generic-list/reducers/generic-list.reducers';

// export interface State {
//   movies: moviesReducer.State;
//   genericList: genericListReducer.State;
// }

// const reducers = {
//     movies: moviesReducer.moviesReducer,
//     genericList: genericListReducer.genericListReducer
//   };

// const combinedReducer = combineReducers(reducers);

// export function reducer(state: any, action: any) {
//   return combinedReducer(state, action);
// }


// export const getMoviesState = (state: State) => state.movies;
// export const getMovies = createSelector(getMoviesState, moviesReducer.getMovies);

// export const getGenericListState = (state: State) => state.genericList;
// export const getSearchText = createSelector(getGenericListState, genericListReducer.getSearchText);
// export const getPagination = createSelector(getGenericListState, genericListReducer.getPagination);
