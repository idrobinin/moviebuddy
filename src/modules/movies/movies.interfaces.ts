import { Request } from "express";

export interface SearchRequest extends Request {
  query: {
    searchTerm: string;
  };
}

export interface Movie {
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
