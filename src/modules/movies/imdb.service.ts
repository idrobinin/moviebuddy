import { stringify } from "qs";
import axios from "axios";
import { IMDB_SEARCH_URL } from "./movies.const";

export const searchInImdb = async (query) => {
  const queryParams = stringify({
    api_key: "8e2575aa062360b8822f494fc76391c8",
    query,
  });
  const {
    data: { results },
  } = await axios.get(`${IMDB_SEARCH_URL}/search/movie?${queryParams}`);
  const [movie] = results;
  return movie;
};

export const getMovieFromImdb = async (imdbId: string) => {
  const queryParams = stringify({
    api_key: "8e2575aa062360b8822f494fc76391c8",
  });
  const result = await axios.get(
    `${IMDB_SEARCH_URL}/movie/${imdbId}?${queryParams}`
  );
  // const [movie] = results;
  return result.data;
};
