export type FetchedDataTypes = {
  results?: FilmTypes[];
  page?: number;
  total_pages?: number;
  total_results?: number;
};

export type FilmTypes = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: 87.255;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: string[] | string;
  runtime: number;
};
