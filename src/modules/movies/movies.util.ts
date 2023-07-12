import { parse } from "qs";
import { MAGNET_KEY, REPLACE_MAGNET_STRING } from "./movies.const";

export const extractMagnetFromQuery = (query: string) => {
  const parsedMagnetLink = parse(query);
  return String(parsedMagnetLink[MAGNET_KEY]).replace(
    REPLACE_MAGNET_STRING,
    ""
  );
};
