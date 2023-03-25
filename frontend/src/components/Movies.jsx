import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-router-dom';

export default function Movies() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/v1/movies?page=1',
        );
        setIsLoaded(true);
        setMovies(response.data.movies);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchUsers();
  }, []);

  if (error) return <div>{error.message}</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {movies?.map((movie) => (
          <Grid item key={movie._id} xs={12} sm={6} md={6}>
            <Link to={`/movies/${movie._id}`}>
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
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
