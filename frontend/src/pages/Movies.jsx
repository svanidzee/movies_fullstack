import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Grid,
  // Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

import { Button, QueryResult } from '../components';

export default function Movies() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/movies?page=${currentPage}`,
        );
        setIsLoaded(true);
        setMovies(response.data.movies);
        setCurrentPage(response.data.page);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    };
    fetchMovies();
  }, [currentPage]);

  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <QueryResult error={error} loading={isLoaded} data={movies}>
        <Grid container spacing={2}>
          {movies?.map((movie) => (
            <Grid item key={movie._id} xs={12} sm={6} md={3}>
              <Card
                component={Link}
                to={`/movies/${movie._id}`}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: '100%',
                    maxHeight: '500px',
                  }}
                  image={movie?.poster}
                  alt="random"
                />

                <CardContent
                  sx={{ flexGrow: 1 }}
                  component={Grid}
                  item
                  xs
                  container
                  direction="row"
                  justifyContent="space-between"
                >
                  <Typography gutterBottom variant="h5" fontSize={19}>
                    {movie.title}({movie.year})
                  </Typography>
                  <Typography gutterBottom variant="h5" fontSize={19}>
                    {movie.imdb.rating}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item xs container direction="row" justifyContent="space-between">
          <Button
            onClick={() => {
              setCurrentPage(currentPage - 1);
            }}
          >
            Get Previus Page
          </Button>
          <Button
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Get next Page
          </Button>
        </Grid>
      </QueryResult>
    </Container>
  );
}
