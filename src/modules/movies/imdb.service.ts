import { IMDBMovie, Movie } from "./movies.interfaces";
import { convertMovie, IMDBRequests } from "./helpers/imdb.helper";

const { getMovie, searchMovie } = IMDBRequests();

export const searchInImdb = async (
  query: string
): Promise<Partial<IMDBMovie>> => {
  const {
    data: { result },
  } = await searchMovie(query);
  return result;
};

export const getMovieFromImdb = async (
  imdbId: string
): Promise<Partial<Movie>> => {
  const {
    data: { result },
  } = await getMovie(imdbId);

  return convertMovie(result);
};
