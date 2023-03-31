import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { QueryResult, MovieCard } from '../components';
import { useFetchMovie } from '../hooks';

export default function Movie() {
  let { id } = useParams();
  const { movie, error, isLoaded } = useFetchMovie(id);
  const { title, year, directors, genres, cast, fullplot, imdb, poster } =
    movie;
  return (
    <QueryResult error={error} loading={isLoaded} data={movie}>
      <Container>
        <MovieCard
          title={title}
          year={year}
          directors={directors}
          genres={genres}
          cast={cast}
          poster={poster}
          fullplot={fullplot}
          rating={imdb?.rating}
        />
      </Container>
    </QueryResult>
  );
}
