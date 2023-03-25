import { initMovies, initMovie } from '../api';

export default function useApi() {
  const baseURL = 'http://localhost:5000/api/v1';

  return {
    getMovies: initMovies(baseURL),
    getMovie: initMovie(baseURL),
  };
}
