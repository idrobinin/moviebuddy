import { Request } from "express";

export interface IStreamRequest extends Request {
  params: {
    magnet: string;
    fileName: string;
  };
  headers: {
    range: string;
  };
}
