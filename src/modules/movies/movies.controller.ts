import { Router, Response } from "express";
import { ISearchRequest } from "./movies.interfaces";
import axios from "axios";
import { parse } from "qs";
import * as cheerio from "cheerio";

const router = Router();
const BASE_SEARCH_URL = "https://rutor.info/search/";
const MAGNET_KEY = "magnet:?xt";
const REPLACE_MAGNET_STRING = "urn:btih:";
const RUTOR_URL = "https://rutor.info";
// пишем скраппер для парсинга данных по кино контенту на руторе
router.get(
  "/search",
  async ({ query: { searchTerm } }: ISearchRequest, resp: Response) => {
    try {
      const searchResult = await axios.get(`${BASE_SEARCH_URL}${searchTerm}`);
      const $ = cheerio.load(searchResult.data);

      const data = $("#index tr").toArray();

      // вытаскиваем нужные нам данные(магнет ссылки) из массива с данными
      const results = data
        .map((el) => {
          const [_, magnetTag, title] = $(el).find("a").toArray();

          // вытаскиваем ссылки из атрибута href
          const magnetLink = $(magnetTag).attr("href");
          const parsedMagnetLink = parse(magnetLink);
          const magnet = String(parsedMagnetLink[MAGNET_KEY]).replace(
            REPLACE_MAGNET_STRING,
            ""
          );

          const torrentUrl = `${RUTOR_URL}${$(title).attr("href")}`;

          return {
            title: $(title).text(),
            magnet,
            torrentUrl,
          };
        })
        .filter((el) => el.title);

      resp.status(200).send(results);
    } catch (err) {
      resp.status(400).send(err);
    }
  }
);

export default router;
