import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  styled,
  Paper,
  ButtonBase,
} from '@mui/material';

import { QueryResult, MovieInfo } from '../components';
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
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 428, height: 450 }}>
              <Img alt="complex" src={movie?.poster} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" alignItems="flex-start">
              <MovieInfo movie={movie} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </QueryResult>
  );
}
