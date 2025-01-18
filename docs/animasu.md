# Animasu docs

## First steps

pertama tama import package animaku terlebih dahulu

### ES6

```ts
import { animasu } from "yaoi";
```

### CommonJS

```ts
const { animasu } = require("yaoi");
```

## 1. Get Animes

parameter untuk method getAnimes

```ts
{
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
```

ambil data banyak anime

```ts
const animes = await animasu.getAnimes({
  search: "naruto";
  page: 1;
  sort: "update";
})
console.log(animes)
```

output:

```ts
{
  hasNext: true,
  data: [
    {
      title: "...",
      slug: "...",
      link: "...",
      image: "...",
      type: "...",
      episode: "...",
      status: "COMPLETE",
    },
    {...}
  ]
}
```

## 2. Get Anime

ambil data detail anime

```ts
const anime = await animasu.getAnime("k-on-s2"); // slug
console.log(anime);
```

output

```ts
{
  slug: "...",
  url: "...",
  title: "...",
  synonym: "...",
  synopsis: "...",
  image: "...",
  rating: 8.0,
  author: "...",
  genres: {...},
  status: "...",
  aired: "...",
  type: "...",
  episode: "...",
  duration: "...",
  studio: "...",
  season: "...",
  posted: "...",
  updateAt: "...",
  episodes: [...];
  batches: [...];
}
```

## 3. Get Streams

ambil data streams by episode slug

```ts
const streams = await animasu.getStreams("k-on-s2-episode-1"); // episode slug
console.log(streams);
```

output

```ts
[
  {
    name: "480",
    url: "http.com";
  },
  {
    name: "720",
    url: "http.com";
  }
]
```

## 4. Get Genres

ambil list data genre

```ts
const genres = await animasu.getGenres();
console.log(genres);
```

output

```ts
[
  {
    name: "Action",
    slug: "action",
    url: "http.com",
  },
  {
    name: "Adventure",
    slug: "adventure",
    url: "http.com",
  },
];
```

## 5. Get Characters Type (MC)

ambil list data sifat sifat mc

```ts
const characters = await animasu.getCharacters();
console.log(characters);
```

output

```ts
[
  {
    name: "Vampire",
    slug: "vampire",
    url: "http.com",
  },
  {
    name: "Supporting",
    slug: "supporting",
    url: "http.com",
  },
];
```

## 6. Get Animes By Day

ambil data anime by day

```ts
const animes = await animasu.getAnimesByDay("senin");
console.log(animes);
```

output

```ts
[
  {
    title: "...",
    slug: "...",
    link: "...",
    image: "...",
    type: "...",
    episode: "...",
    status: "COMPLETE",
  },
  {...}
]
```

## 7. Get Schedule Animes

ambil data animes semua jadwal dari senin sampai minggu

```ts
const animes = await animasu.getScheduleAnimes();
console.log(animes);
```

output

```ts
{
  senin: [
    {
      title: "...",
      slug: "...",
      link: "...",
      image: "...",
      type: "...",
      episode: "...",
      status: "COMPLETE",
    },
  ];
  selasa: [
    {
      title: "...",
      slug: "...",
      link: "...",
      image: "...",
      type: "...",
      episode: "...",
      status: "COMPLETE",
    },
  ];
  rabu: [
    {
      title: "...",
      slug: "...",
      link: "...",
      image: "...",
      type: "...",
      episode: "...",
      status: "COMPLETE",
    },
  ];
  kamis: [
    {
      title: "...",
      slug: "...",
      link: "...",
      image: "...",
      type: "...",
      episode: "...",
      status: "COMPLETE",
    },
  ];
  jumat: [
    {
      title: "...",
      slug: "...",
      link: "...",
      image: "...",
      type: "...",
      episode: "...",
      status: "COMPLETE",
    },
  ];
  sabtu: [
    {
      title: "...",
      slug: "...",
      link: "...",
      image: "...",
      type: "...",
      episode: "...",
      status: "COMPLETE",
    },
  ];
  minggu: [
    {
      title: "...",
      slug: "...",
      link: "...",
      image: "...",
      type: "...",
      episode: "...",
      status: "COMPLETE",
    },
  ];
  random: [
    {
      title: "...",
      slug: "...",
      link: "...",
      image: "...",
      type: "...",
      episode: "...",
      status: "COMPLETE",
    },
  ];
}
```
