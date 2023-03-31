import { useState, useEffect } from 'react';
import { useApi } from './';

export default function useFetchMovies() {
  const { getMovies } = useApi();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies(currentPage);
        setIsLoaded(true);
        setMovies(response.data.movies);
        setCurrentPage(response.data.page);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchMovies();
  }, [currentPage]);

  return { movies, currentPage, setCurrentPage, error, isLoaded };
}
