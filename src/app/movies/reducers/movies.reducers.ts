import { MoviesActionTypes } from '../actions/movies.actions';
import { Movie } from '../model/movie.model';

export interface State {
  movies: Movie[];
}

export const initialState: State = {
  movies: []
};

export const moviesReducer = (state, action): State => {
  if (state) {
    switch (action.type) {
      case MoviesActionTypes.GETMOVIES:
        const newMoviesList = Object.assign({}, state, { movies: action.payload });
        return Object.assign({}, state, newMoviesList);
      case MoviesActionTypes.GETMOVIEBYID:
        // const newMovieEdit = Object.assign({}, state.movies, { movies: action.payload });
        // return Object.assign({}, state, newMoviesList);
      default:
        return state;
    }
  }
};

export const getMovies = (state: State) => state ? state.movies : [];
