import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  Box,
  Button,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import { StyledCardImg } from './CardImage';

export default function MovieCard({ poster, ...other }) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Card>
      <CardContent>
        <Grid container direction="row" style={{ textAlign: 'center' }}>
          <Grid item>
            <CardMedia
              component="img"
              image={poster ?? require('../assets/no.jpg')}
              alt="No image avaliable"
              sx={{
                // maxWidth: matchesMD ? 340 : 531,
                // maxWidth: '100%',
                // height: 'auto',
                // margin: 0,
                // padding: 0,

                top: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                // position: 'absolute',
              }}
            />
          </Grid>
          <Grid item direction="column" sx={{ width: '600px', padding: 2 }}>
            {Object.entries(other).map(([key, val]) => (
              <Typography variant="body2">
                <Typography
                  sx={{ fontWeight: 600, textTransform: 'capitalize' }}
                  component="span"
                >
                  {key}:
                </Typography>
                {val}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
