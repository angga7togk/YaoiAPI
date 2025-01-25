import "dotenv/config";
import axios from "axios";
import animasuProvider from "./provider/animasu";
import { AnimeSimple } from "./types";
import dns from "dns";

export * from "./types"; // init all types in to index.d.ts

axios.defaults.validateStatus = () => true;
axios.defaults.headers.common["User-Agent"] =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.54";

const DNS_LIST = process.env.DNS ? process.env.DNS.split(",") : [];
dns.setServers(DNS_LIST);

export const animasu = animasuProvider; 

// (async () => {
//   setInterval(async () =>   {
//     const animes = await animasuProvider.getAnimes({
//       sort: "update",
//     });
//     const animeNew = animes.data[0];
//     const animeInCache = cache.get<AnimeSimple>("anime-update");

//     if (animeNew.slug !== animeInCache?.slug) {
//       eventEmitter.emit("anime-update", animeNew);
//     }
//     cache.set("anime-update", animeNew);
//   }, 1000 * 60 * 10);
// })();
