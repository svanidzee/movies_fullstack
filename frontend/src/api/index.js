import axios from 'axios';

export const initMovies = (baseUrl) => (currentPage) =>
  axios.get(`${baseUrl}/movies?page=${currentPage}`);

export const initMovie = (baseUrl) => (id) =>
  axios.get(`${baseUrl}/movies/id/${id}`);
