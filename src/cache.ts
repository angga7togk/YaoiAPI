import "dotenv/config"
import NodeCache from "node-cache";
const TTL = Number(process.env.CACHE_TTL) || 600; // TTL 10 menit

const cache = new NodeCache({ stdTTL: TTL, checkperiod: 60 }); 

export default cache;
