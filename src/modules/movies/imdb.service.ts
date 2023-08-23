import { IMDBMovie } from "./movies.interfaces";
import { IMDBRequests } from "./helpers/imdb.helper";

const { getMovie, searchMovie } = IMDBRequests();

export const searchInImdb = async (
  query: string
): Promise<Partial<IMDBMovie>> => {
  const {
    data: { result },
  } = await searchMovie(query);
  return result;
};

export const getMovieFromImdb = async (imdbId: string): Promise<IMDBMovie> => {
  const { data } = await getMovie(imdbId);
  return data;
};
