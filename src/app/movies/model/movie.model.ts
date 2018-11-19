export interface Movie {
    page: string;
    total_results: number;
    total_pages: number;
    results: [{
        id: string;
        title: string;
        original_title: string;
        imdb_id: string;
        homepage: string;
        poster_path: string;
        genres: string;
        overview: string;
        vote_average: string;
        vote_count: string;
        popularity: string;
        release_date: string;
    }];
}
