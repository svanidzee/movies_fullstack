import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  CardActionArea,
  Grid,
  CardActions,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';

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
  console.log(movie);
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

  if (error) return <div>{error.message}</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Paper
      component={Container}
      sx={{ py: 8 }}
      maxWidth="lg"
      //   sx={{
      //     p: 2,
      //     margin: 'auto',
      //     maxWidth: 500,
      //     flexGrow: 1,
      //     backgroundColor: (theme) =>
      //       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      //   }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 428, height: 428 }}>
            <Img alt="complex" src={movie.poster} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Movie Info
              </Typography>
              {/* <Typography variant="body2" gutterBottom>
                Genre: {movie.genres[0]}
              </Typography>
              {movie.directors.map((d) => (
                <Typography variant="body2" color="text.secondary">
                  Director: {d}
                </Typography>
              ))}
              {movie.writers.map((w) => (
                <Typography variant="body2" color="text.secondary">
                  Writers: {w}
                </Typography>
              ))}
              <Typography variant="body2" color="text.secondary">
                Release Date: {movie.year}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Plot: {movie.fullplot}
              </Typography> */}
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Typography variant="subtitle1" component="div">
              {movie.directors[0]}
            </Typography>
          </Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
}
