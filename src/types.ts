export interface Option {
  noCache?: boolean;
}

export interface AnimeSimple {
  title: string;
  slug: string;
  image: string;
  type: string;
  episode: string;
  status: "COMPLETE" | "ONGOING" | "UPCOMING";
}

export interface Genre {
  name: string;
  slug: string;
}

export interface Character {
  name: string;
  slug: string;
}

export interface Episode {
  episode: string;
  slug: string;
}

export interface Batch {
  name: string;
  resolution: string;
  url: string;
}

export interface Stream {
  name: string;
  url: string;
}

export interface AnimeDetail {
  slug: string;
  title: string;
  synonym: string;
  synopsis: string;
  image: string;
  rating: number;
  author: string;
  genres: Genre[];
  status: string;
  aired: string;
  type: string;
  episode: string;
  duration: string;
  studio: string;
  season: string;
  trailer: string;
  updateAt: string;
  episodes: Episode[];
  batches: Batch[];
}

export interface Schedules {
  senin: AnimeSimple[];
  selasa: AnimeSimple[];
  rabu: AnimeSimple[];
  kamis: AnimeSimple[];
  jumat: AnimeSimple[];
  sabtu: AnimeSimple[];
  minggu: AnimeSimple[];
  random: AnimeSimple[];
}

export interface ResponsePagination {
  data: AnimeSimple[];
  hasNext: boolean;
}

export interface AnimesParams {
  search?: string;
  page?: number;
  genres?: string[];
  genre?: string;
  characterTypes?: string[];
  characterType?: string;
  type?: string;
  seasons?: string[];
  season?: string;
  status?: string;
  sort?: string;
}
