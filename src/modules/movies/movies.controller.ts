import { Router, Response } from "express";
import { SearchRequest } from "./movies.interfaces";
import { movieSearch } from "./movies.service";

const router = Router();

// пишем скраппер для парсинга данных по кино контенту на руторе
router.get(
  "/search",
  async ({ query: { searchTerm } }: SearchRequest, resp: Response) => {
    try {
      const result = await movieSearch(searchTerm);
      resp.status(200).send(result);
    } catch (err) {
      resp.status(400).send(err);
    }
  }
);

export default router;
