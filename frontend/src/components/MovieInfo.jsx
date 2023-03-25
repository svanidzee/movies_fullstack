import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function MovieInfo({ movie }) {
  return (
    <Grid item sm width="680px">
      <Typography variant="title" component="div" gutterBottom>
        Title: {movie?.title}({movie?.year})
      </Typography>
      <Typography variant="body2">IMDB: {movie?.imdb?.rating}</Typography>
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
  );
}
