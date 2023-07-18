import { Router, Response } from "express";
import { CreateMovieRequest, SearchRequest } from "./movies.interfaces";
import * as MovieService from "./movies.service";

const router = Router();

// пишем скраппер для парсинга данных по кино контенту на руторе
router.get(
  "/search",
  async ({ query: { searchTerm } }: SearchRequest, resp: Response) => {
    try {
      const result = await MovieService.movieSearch(searchTerm);
      resp.status(200).send(result);
    } catch (err) {
      resp.status(400).send(err);
    }
  }
);

// поиск данных в IMDB
router.get(
  "/imdb-search",
  async ({ query: { searchTerm } }: SearchRequest, resp: Response) => {
    try {
      const result = await MovieService.searchInImdb(searchTerm);
      resp.status(200).send(result);
    } catch (err) {
      resp.status(400).send(err);
    }
  }
);

// создать фильм в БД
router.post("/", async ({ body }: CreateMovieRequest, resp: Response) => {
  try {
    const result = await MovieService.create(body);
    resp.status(200).send(result);
  } catch (err) {
    resp.status(400).send(err);
  }
});

// показать все фильмы
router.get("/", async (_, resp: Response) => {
  try {
    const result = await MovieService.findAll();
    resp.status(200).send(result);
  } catch (err) {
    resp.status(400).send(err);
  }
});

export default router;
