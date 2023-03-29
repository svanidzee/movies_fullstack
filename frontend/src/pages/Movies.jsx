import React from 'react';
import { Container, Grid } from '@mui/material';

import { QueryResult, Pagination, MoviesCard } from '../components';
import { useFetchMovies } from '../hooks';

export default function Movies() {
  const { movies, currentPage, setCurrentPage, error, isLoaded } =
    useFetchMovies();
  // console.log(movies);

  return (
    <Container sx={{ py: 1 }} maxWidth="xl">
      <QueryResult error={error} loading={isLoaded} data={movies}>
        <Grid container spacing={2}>
          {movies?.map((movie) => (
            <MoviesCard key={movie._id} {...movie} />
          ))}
        </Grid>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </QueryResult>
    </Container>
  );
}
