import { Request } from "express";

export interface ISearchRequest extends Request {
  query: {
    searchTerm: string;
  };
}
