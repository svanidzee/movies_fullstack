import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, useMediaQuery, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { QueryResult, MovieCard } from '../components';
import { useFetchMovie } from '../hooks';

export default function Movie() {
  let { id } = useParams();
  const { movie, error, isLoaded } = useFetchMovie(id);
  const { title, year, directors, genres, cast, fullplot, imdb, poster } =
    movie;

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <QueryResult error={error} loading={isLoaded} data={movie}>
      <Grid
        container
        style={{ height: '10em', marginTop: '1em' }}
        alignItems="center"
        justify="center"
      >
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
      </Grid>
    </QueryResult>
  );
}
