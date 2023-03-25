import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Grid,
  Typography,
  styled,
  Paper,
  ButtonBase,
} from '@mui/material';

import { QueryResult } from '../components';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Movie() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/movies/id/${id}`,
        );
        setIsLoaded(true);
        setMovie(response.data);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchMovie();
  }, []);

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
              <Grid item sm width="680px">
                <Typography variant="title" component="div" gutterBottom>
                  Title: {movie?.title}({movie?.year})
                </Typography>
                <Typography variant="body2">
                  IMDB: {movie?.imdb?.rating}
                </Typography>
                <Typography variant="body2" gutterBottom textAlign="justify">
                  Directors: {'' + movie?.directors}
                </Typography>

                <Typography variant="body2" gutterBottom textAlign="justify">
                  Genres: {'' + movie?.genres}
                </Typography>
                <Typography variant="body2" gutterBottom textAlign="justify">
                  Cast: {'' + movie?.cast}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Plot: {movie?.fullplot}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </QueryResult>
  );
}
