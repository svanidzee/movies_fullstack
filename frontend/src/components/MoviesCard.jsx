import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function MoviesCard({
  _id,
  poster,
  title,
  year,
  imdb: { rating },
}) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card component={Link} to={`/movies/${_id}`}>
        <CardMedia
          component="img"
          image={poster ?? require('../utils/assets/no.jpg')}
          alt="No image avaliable"
        />

        <CardContent component={Grid} item xs container>
          <Typography variant="subtitle2">
            {title}({year})
          </Typography>
          <Typography variant="subtitle2">{rating}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
