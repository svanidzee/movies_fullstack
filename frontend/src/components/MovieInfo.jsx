import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function MovieInfo({
  title,
  year,
  directors,
  genres,
  cast,
  fullplot,
  imdb: { rating },
}) {
  return (
    <Grid item>
      <Typography variant="title" component="div" gutterBottom>
        {title}({year})
      </Typography>
      <Typography variant="body2">IMDB: {rating}</Typography>
      <Typography variant="body2">Directors: {directors}</Typography>
      <Typography variant="body2">Genres: {genres}</Typography>
      <Typography variant="body2">Cast: {cast}</Typography>
      <Typography variant="body2">Plot: {fullplot}</Typography>
    </Grid>
  );
}
