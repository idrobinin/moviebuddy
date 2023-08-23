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

// type Some = {
//   adult: false;
//   backdrop_path: "/uMSxXLfH7v30gRNBqsQaSP3yqX5.jpg";
//   genre_ids: [16, 35, 10751];
//   id: 438148;
//   original_language: "en";
//   original_title: "Minions: The Rise of Gru";
//   overview: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.";
//   popularity: 141.649;
//   poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg";
//   release_date: "2022-06-29";
//   title: "Minions: The Rise of Gru";
//   video: false;
//   vote_average: 7.391;
//   vote_count: 3000;
// };

export const convertMovie = ({
  title,
  overview,
  release_date,
}: IMDBMovie): Partial<Movie> => {
  return {
    magnet: "49cb95a725dc7cbd6664b0fc84f966d1f565a070",
    fileName: "Spider.Man.No.Way.Home.2021.EC.WEB-DLRip.720p.ExKinoRay.mkv",
    sourceUrl:
      "https://rutor.info/torrent/893033/chelovek-pauk-net-puti-domoj_spider-man-no-way-home-2021-web-dl-2160p-4k-hdr-dolby-vision-profile-8-d-rasshirennaja-versija",
    title: title,
    plot: overview,
    year: new Date(release_date).getFullYear().toString(),
    director: "Джон Уоттс",
    actors: [
      "Том Холланд",
      "Зендая",
      "Бенедикт Камбербэтч",
      "Мариса Томей",
      "Джейкоб Баталон",
      "Уиллем Дефо",
      "Альфред Молина",
      "Джейми Фокс",
      "Рис Иванс",
      "Томас Хейден Черч",
      "Джон Фавро",
      "Тоби Магуайр",
      "Эндрю Гарфилд",
      "Тони Револори",
      "Дж.К. Симмонс",
      "Бенедикт Вонг",
      "Энгаури Райс",
      "Мартин Старр",
      "Дж.Б. Смув",
      "Гарри Холланд",
      "Хэннибал Бересс",
      "Паула Ньюсом",
      "Хорхе Лендеборг мл.",
      "Чарли Кокс",
    ],
    poster:
      "https://s.rutor.org/imgproxy.php?url=https://i5.imageban.ru/out/2022/11/17/37789fa52d02940f7ee0cf5fb90f0755.jpg",
    trailer: "https://www.youtube.com/watch?v=V0hagz_8L3M",
    released: "2021",
    boxOffice: "",
    writer: "Kris MacKenna",
    runtime: "148 min",
    ratingImdb: "8.3",
    imdbId: "tt10872600",
    rated: "PG-13",
    genres: ["Фантастика", "Боевик", "Приключения", "Фэнтези"],
  };
};

type A = {
  adult: false;
  backdrop_path: "/ww1eIoywghjoMzRLRIcbJLuKnJH.jpg";
  belongs_to_collection: {
    id: 403374;
    name: "Jack Reacher Collection";
    poster_path: "/qtafXiYDUMKxzsssU41qWey5oiT.jpg";
    backdrop_path: "/vViRXFnSyGJ2fzMbcc5sqTKswcd.jpg";
  };
  budget: 60000000;
  genres: [{ id: 28; name: "Action" }, { id: 53; name: "Thriller" }];
  homepage: "";
  id: 343611;
  imdb_id: "tt3393786";
  original_language: "en";
  original_title: "Jack Reacher: Never Go Back";
  overview: "When Major Susan Turner is arrested for treason, ex-investigator Jack Reacher undertakes the challenging task to prove her innocence and ends up exposing a shocking conspiracy.";
  popularity: 53.761;
  poster_path: "/cOg3UT2NYWHZxp41vpxAnVCOC4M.jpg";
  production_companies: [
    {
      id: 82819;
      logo_path: "/gXfFl9pRPaoaq14jybEn1pHeldr.png";
      name: "Skydance";
      origin_country: "US";
    },
    { id: 83645; logo_path: null; name: "Huahua Media"; origin_country: "CN" },
    {
      id: 3407;
      logo_path: "/iVMjKOFyRvm9PW45lW1wW6TSvnj.png";
      name: "Shanghai Film Group";
      origin_country: "CN";
    },
    {
      id: 21777;
      logo_path: null;
      name: "TC Productions";
      origin_country: "US";
    },
    {
      id: 4;
      logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png";
      name: "Paramount";
      origin_country: "US";
    }
  ];
  production_countries: [
    { iso_3166_1: "CN"; name: "China" },
    { iso_3166_1: "US"; name: "United States of America" }
  ];
  release_date: "2016-10-19";
  revenue: 162146076;
  runtime: 118;
  spoken_languages: [
    { english_name: "English"; iso_639_1: "en"; name: "English" }
  ];
  status: "Released";
  tagline: "Justice is Coming.";
  title: "Jack Reacher: Never Go Back";
  video: false;
  vote_average: 5.941;
  vote_count: 4447;
  videos: {
    results: [
      {
        iso_639_1: "en";
        iso_3166_1: "US";
        name: "Jack Reacher: Never Go Back (2016) - IMAX Trailer - Paramount Pictures";
        key: "DTBcGQWmQ1c";
        published_at: "2016-09-29T16:00:00.000Z";
        site: "YouTube";
        size: 1080;
        type: "Trailer";
        official: true;
        id: "58ba538dc3a368668f0148b8";
      },
      {
        iso_639_1: "en";
        iso_3166_1: "US";
        name: 'Jack Reacher: Never Go Back (2016) - "Find" Spot - Paramount Pictures';
        key: "fm9Ol-Cq7_s";
        published_at: "2016-09-13T18:07:31.000Z";
        site: "YouTube";
        size: 1080;
        type: "Teaser";
        official: true;
        id: "57d95e019251416851005d34";
      },
      {
        iso_639_1: "en";
        iso_3166_1: "US";
        name: 'Jack Reacher: Never Go Back (2016) - "Command" Spot - Paramount Pictures';
        key: "k3kzqVliF48";
        published_at: "2016-09-02T17:31:00.000Z";
        site: "YouTube";
        size: 1080;
        type: "Teaser";
        official: true;
        id: "57d95e2dc3a36852e0005a62";
      },
      {
        iso_639_1: "en";
        iso_3166_1: "US";
        name: 'Jack Reacher: Never Go Back (2016) - "Followed" Spot - Paramount Pictures';
        key: "51nZS-a7mMY";
        published_at: "2016-08-10T20:02:47.000Z";
        site: "YouTube";
        size: 1080;
        type: "Teaser";
        official: true;
        id: "57d95e49925141670f006166";
      },
      {
        iso_639_1: "en";
        iso_3166_1: "US";
        name: "Jack Reacher: Never Go Back Trailer (2016) - Paramount Pictures";
        key: "aoCP_JHzBUM";
        published_at: "2016-06-22T12:00:03.000Z";
        site: "YouTube";
        size: 1080;
        type: "Trailer";
        official: true;
        id: "58ba535c9251416077018228";
      }
    ];
  };
};
