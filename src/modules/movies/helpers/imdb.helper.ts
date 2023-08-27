// converting Movie to DataBase format to save
import { IMDBMovie, Movie } from "../movies.interfaces";
import { stringify } from "qs";
import axios from "axios";
import { IMDB_SEARCH_URL, MOVIE_IMDB_HEADERS } from "../movies.const";

const headers = MOVIE_IMDB_HEADERS;

// объединяем запрос в IMDB
export const IMDBRequests = () => {
  return {
    getMovie: (imdbId: string) =>
      axios.get(`${IMDB_SEARCH_URL}/imdbSearchById?movieId=${imdbId}`, {
        headers,
      }),
    searchMovie: (query: string) =>
      axios.get(`${IMDB_SEARCH_URL}/imdbSearchByName?query=${query}`, {
        headers,
      }),
  };
};

type result = {
  Title: "Inception";
  Year: "2010";
  Rated: "PG-13";
  Released: "16 Jul 2010";
  Runtime: "148 min";
  Genre: "Action, Adventure, Sci-Fi";
  Director: "Christopher Nolan";
  Writer: "Christopher Nolan";
  Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page";
  Plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.";
  Language: "English, Japanese, French";
  Country: "United States, United Kingdom";
  Awards: "Won 4 Oscars. 159 wins & 220 nominations total";
  Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg";
  Ratings: [
    { Source: "Internet Movie Database"; Value: "8.8/10" },
    { Source: "Rotten Tomatoes"; Value: "87%" },
    { Source: "Metacritic"; Value: "74/100" }
  ];
  Metascore: "74";
  imdbRating: "8.8";
  imdbVotes: "2,446,118";
  imdbID: "tt1375666";
  Type: "movie";
  DVD: "20 Jun 2013";
  BoxOffice: "$292,587,330";
  Production: "N/A";
  Website: "N/A";
  Response: "True";
};

// полученные данные IMDB конвертируем в наш интерфейс Movie
export const convertMovie = async ({
  Title,
  Director,
  Plot,
  Released,
  Actors,
  Poster,
  Runtime,
  Writer,
  imdbRating,
  imdbID,
  Genre,
  BoxOffice,
  Rated,
}: IMDBMovie): Promise<Partial<Movie>> => {
  return {
    title: Title,
    plot: Plot,
    year: String(new Date(Released).getFullYear()),
    director: Director,
    actors: Actors.split(", "),
    poster: Poster,
    trailer: "",
    released: Released.split(" ")[2],
    boxOffice: BoxOffice,
    writer: Writer,
    runtime: Runtime,
    ratingImdb: imdbRating,
    imdbId: imdbID,
    rated: Rated,
    genres: Genre.split(", "),
  };
};
