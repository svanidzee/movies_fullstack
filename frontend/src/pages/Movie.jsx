import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, useMediaQuery, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { QueryResult, MovieCard } from '../components';
import { useFetchMovie } from '../hooks';

export default function Movie() {
  let { id } = useParams();
  const { movie, error, isLoaded } = useFetchMovie(id);

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <QueryResult error={error} loading={isLoaded} data={movie}>
      {/* <Container sx={{ py: 1 }} maxWidth="xl"> */}
      <Grid component={Container} sx={{ py: 1 }} spacing={2}>
        {/* <MovieCard movie={movie} /> */}
        <MovieCard {...movie} />
      </Grid>
      {/* </Container> */}
    </QueryResult>
  );
}
