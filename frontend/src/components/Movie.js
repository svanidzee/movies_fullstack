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
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item key={movie._id} xs={12} sm={6} md={6}>
          <Card
            sx={{
              width: '500px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardMedia
              component="img"
              sx={
                {
                  // height: '700px',
                }
              }
              image={movie?.poster}
              alt="random"
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.title}
              </Typography>
              <Typography>{movie.plot}</Typography>
              <Typography variant="caption" fontSize={15}>
                IMDB Rating: {movie.imdb.rating}{' '}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
