import { initMovies, initMovie } from '../api';

export default function useApi() {
  const baseURL = 'https://mernback-4nnr.onrender.com/api/v1';

  return {
    getMovies: initMovies(baseURL),
    getMovie: initMovie(baseURL),
  };
}
