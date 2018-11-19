export interface ApplicationConfig {
    theMovieDbURL: string;
    theMovieDbSearchUR: string;
    theMovieDbApiKey: string;
  }

export const CONFIG: ApplicationConfig = {
    theMovieDbURL: 'https://api.themoviedb.org/3/movie/',
    theMovieDbSearchUR: 'https://api.themoviedb.org/3/search/movie',
    theMovieDbApiKey: 'eba416e7f78b3dcbc53ce4a16d2bab8f'
  };
