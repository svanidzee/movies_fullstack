import { initMovies, initMovie } from '../api';

export default function useApi() {
  const baseURL = 'https://mernback-4nnr.onrender.com/api/v1';
  // const baseURL = 'http://localhost:5000/api/v1';

  return {
    getMovies: initMovies(baseURL),
    getMovie: initMovie(baseURL),
  };
}
