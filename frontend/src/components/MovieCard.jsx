import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import { MovieInfo } from '../components';

export default function MovieCard({ _id, poster, ...rest }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      item
      key={_id}
      // xs={3}
      // sm={6}
      // md={12}
      // sx={{
      //   maxWidth: 800
      // }}
    >
      <Card
        sx={{
          display: 'flex',
          flexDirection: matchesSM ? 'column' : 'row',
          padding: 1,
          // maxWidth: 800,
          // maxWidth: matchesMD ? 800 : 771,
        }}
      >
        <CardMedia
          component="img"
          image={poster ?? require('../utils/assets/no.jpg')}
          alt="No image avaliable"
          sx={{
            // maxWidth: matchesMD ? 340 : 531,
            maxWidth: '100%',
            height: 'auto',
            margin: 0,
            padding: 0,
          }}
        />

        <CardContent component={Grid} item md>
          {/* <MovieInfo movie={movie} /> */}
          <MovieInfo {...rest} />
        </CardContent>
      </Card>
    </Grid>
  );
}
