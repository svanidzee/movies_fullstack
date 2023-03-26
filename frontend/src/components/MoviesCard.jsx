import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function MoviesCard({ movie }) {
  return (
    <Grid item key={movie._id} xs={12} sm={6} md={3}>
      <Card component={Link} to={`/movies/${movie._id}`}>
        <CardMedia
          component="img"
          image={movie?.poster}
          alt={movie.poster ? movie.title : 'No image avaliable'}
        />

        <CardContent component={Grid} item xs container>
          <Typography variant="subtitle2">
            {movie.title}({movie.year})
          </Typography>
          <Typography variant="subtitle2">{movie.imdb.rating}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
