import { Router, Response, Request, NextFunction } from "express";
import WebTorrent, { Torrent, TorrentFile } from "webtorrent";

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

router.get("/add/:magnet", (req: Request, resp: Response) => {
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
router.get("/stats", (req: Request, resp: Response) => {
  resp.status(200).send(state);
});

// stream endpoint
interface StreamRequest extends Request {
  params: {
    magnet: string;
    fileName: string;
  };
  headers: {
    range: string;
  };
}

interface ErrorWithStatus extends Error {
  status: number;
}
router.get(
  "/:magnet/:fileName",
  (req: StreamRequest, res: Response, next: NextFunction) => {
    const {
      params: { magnet, fileName },
      headers: { range },
    } = req;

    // проверяем наличие range
    if (!range) {
      const error = new Error(
        "Range is not defined. Please make request from HTML5 player"
      ) as ErrorWithStatus;
      // устанавливаем нужный статус ошибки
      error.status = 416;
      return next(error);
    }

    const torrentFile = client.get(magnet) as Torrent;
    // переменная для chunk
    let file = <TorrentFile>{};
    // ищем нужный нам файл для стрима по имени и кладем в файл
    for (let i = 0; i < torrentFile.files.length; i++) {
      const currentTorrentPiece = torrentFile.files[i];
      if (currentTorrentPiece.name == fileName) {
        file = currentTorrentPiece;
      }
    }

    //получаем размер файла для стрима
    const fileSize = file.length;

    // достаем range(start,end - positions) из приходящей строки 'bytes-0-14-1342'
    const [startParsed, endParsed] = range.replace(/bytes=/, "").split("-");

    const start = Number(startParsed);
    const end = endParsed ? Number(endParsed) : fileSize - 1;

    // считаем размер чанка
    const chunkSize = end - start + 1;

    // создаем headers для отправки плееру
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    };

    res.writeHead(206, headers);

    const streamPositions = {
      start,
      end,
    };

    const stream = file.createReadStream(streamPositions);

    stream.pipe(res);

    // обработка ошибки если стрим упадет

    stream.on("error", (err) => next(err));
  }
);
export default router;
