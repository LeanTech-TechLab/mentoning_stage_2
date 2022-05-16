export interface MovieListResponse {
  Response: string;
  Search: MovieInfoInterface[];
  totalResults: string;
}

export interface MovieInfoInterface {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieInterface {
  Title: string;
  Type: string;
  Year: string;
}
