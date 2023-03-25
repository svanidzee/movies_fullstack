import { useState, useEffect } from 'react';
import { useApi } from './';

export default function useFetchMovie(id) {
  const { getMovie } = useApi();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovie(id);
        setIsLoaded(true);
        setMovie(response.data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchMovie();
  }, [id, getMovie]);

  return { movie, error, isLoaded };
}
