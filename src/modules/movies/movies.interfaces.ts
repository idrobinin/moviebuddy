import { Request } from "express";

export interface SearchRequest extends Request {
  query: {
    searchTerm: string;
  };
}
export interface IMDBSearchRequest extends Request {
  query: {
    query: string;
  };
}
export interface GetMovieFromIMDBRequest extends Request {
  params: {
    imdbId: string;
  };
}

export interface Movie {
  magnet: string;
  fileName: string;
  sourceUrl: string;
  title: string;
  plot: string;
  year: string;
  director: string;
  actors: string[];
  poster: string;
  trailer: string;
  _id?: string;
  released: string;
  boxOffice: string;
  writer: string;
  runtime: string;
  ratingImdb: string;
  imdbId: string;
  rated: string;
  genres: string[];
}

export interface CreateMovieRequest extends Request {
  body: Movie;
}
export interface UpdateMovieRequest extends Request {
  body: Partial<Movie>;
  params: {
    id: string;
  };
}
export interface DeleteMovieRequest extends Request {
  params: {
    id: string;
  };
}
export interface getMovieRequest extends Request {
  params: {
    id: string;
  };
}

export interface IMDBMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IMDBRating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
interface IMDBRating {
  Source: string;
  Value: string;
}

export interface IMDBMovie {
  success: boolean;
  result: Result;
}
interface Result {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
export interface Rating {
  Source: string;
  Value: string;
}
