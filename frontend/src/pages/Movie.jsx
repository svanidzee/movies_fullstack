import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, styled, Paper } from '@mui/material';

import { QueryResult, MovieCard } from '../components';
import { useFetchMovie } from '../hooks';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Movie() {
  let { id } = useParams();
  const { movie, error, isLoaded } = useFetchMovie(id);

  return (
    <QueryResult error={error} loading={isLoaded} data={movie}>
      <Paper component={Container} sx={{ py: 8 }} maxWidth="lg">
        <MovieCard movie={movie} Img={Img} />
      </Paper>
    </QueryResult>
  );
}
