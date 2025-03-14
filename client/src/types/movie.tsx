export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  popularity: number;
  original_language: string;
  description?: string;
  price?: number;
  rating?: { rate: number; count: number };
  genre_ids: number[];
}
