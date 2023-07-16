import axios from "axios";
import * as cheerio from "cheerio";
import { BASE_SEARCH_URL, RUTOR_URL } from "./movies.const";
import { extractMagnetFromQuery } from "./movies.util";
import MovieEntity from "./movies.model";
import { Movie } from "./movies.interfaces";

export const movieSearch = async (searchTerm: string) => {
  const searchResult = await axios.get(`${BASE_SEARCH_URL}${searchTerm}`);
  const $ = cheerio.load(searchResult.data);

  // вытаскиваем нужные нам tr из дива с данными и кладем в массив
  const data = $("#index tr").toArray();

  // вытаскиваем нужные нам данные(магнет ссылки) из массива с данными
  return data
    .map((el) => {
      // вытаскиваем нужные нам данные по селектору из ссылок(а)
      const [_, magnetTag, title] = $(el).find("a").toArray();

      const torrentUrl = `${RUTOR_URL}${$(title).attr("href")}`;
      const magnetLink = $(magnetTag).attr("href");
      const magnet = extractMagnetFromQuery(magnetLink);

      return {
        title: $(title).text(),
        magnet,
        torrentUrl,
      };
    })
    .filter((el) => el.title);
};

// CRUD service
export const create = async (input: Movie) => {
  const item = new MovieEntity(input);
  await item.save();
  return item;
};
export const update = async (input: Partial<Movie>, id: string) => {
  return MovieEntity.findByIdAndUpdate(id, input, { new: true });
};
export const findOne = async (id: string) => {
  return MovieEntity.findById(id);
};
export const findAll = async () => {
  return MovieEntity.find();
};
export const deleteItem = async (id: string) => {
  return MovieEntity.findByIdAndRemove(id);
};
