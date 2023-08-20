import { Request } from "express";

export interface SearchRequest extends Request {
  query: {
    searchTerm: string;
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
