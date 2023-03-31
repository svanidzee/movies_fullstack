import { Container, Grid } from '@mui/material';

import { QueryResult, Navigation, MoviesCard } from '../components';
import { useFetchMovies } from '../hooks';

export default function Movies() {
  const { movies, currentPage, setCurrentPage, error, isLoaded } =
    useFetchMovies();

  return (
    <Container sx={{ py: 1 }} maxWidth="xl">
      <QueryResult error={error} loading={isLoaded} data={movies}>
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid key={movie._id} item xs={12} sm={6} md={3}>
              <MoviesCard movies={movie} />
            </Grid>
          ))}
        </Grid>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </QueryResult>
    </Container>
  );
}
