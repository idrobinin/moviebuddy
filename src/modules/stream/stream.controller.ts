import { Router } from "express";
import WebTorrent from "webtorrent";

const router = Router();
const client = new WebTorrent();

let state = {
  progress: 0,
  downloadSpeed: 0,
  ratio: 0,
};
let error;

client.on("error", (err: Error) => {
  console.error("err", err.message);
  error = err.message;
});

// при обновлении торрента обновляем наш стейт
client.on("torrent", () => {
  console.log(client.progress);
  state = {
    // переводим биты прогресса в число
    progress: Math.round(client.progress * 100 * 100) / 100,
    downloadSpeed: client.downloadSpeed,
    ratio: client.ratio,
  };
});

router.get("/add/:magnet", (req, resp) => {
  const magnet = req.params.magnet;

  client.add(magnet, (torrent) => {
    const files = torrent.files.map((data) => ({
      data: data.name,
      length: data.length,
    }));

    resp.status(200).send(files);
  });
});

// ендпойнт для статистики
router.get("/stats", (request, response) => {
  response.status(200).send(state);
});

export default router;
