import EventEmitter from "events";
import { AnimeDetail, AnimeSimple, Provider, ResponsePagination } from "../types";

const eventEmitter = new EventEmitter();

export const callGetAnimeDetail = (result: {
  provider: Provider;
  anime: AnimeDetail;
}) => {
  eventEmitter.emit("get-anime-detail", result)
};

export const callGetAnimes = (result: {
  provider: Provider;
  animes: AnimeSimple[]
}) => {
  eventEmitter.emit("get-animes", result)
}

