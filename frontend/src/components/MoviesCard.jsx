import { Link } from 'react-router-dom';
import { Box, Card, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { StyledCardImg } from './CardImage';

const StyledLink = styled(Link)({
  textDecoration: 'none',
});

export default function MoviesCard({ movies }) {
  const {
    _id,
    poster,
    title,
    year,
    imdb: { rating },
  } = movies;

  return (
    <Card>
      <StyledLink to={`/movies/${_id}`}>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          <StyledCardImg
            alt="adsad"
            src={poster ?? require('../assets/img/no.jpg')}
          />
        </Box>
        <Stack
          direction="row"
          alignItems="start"
          justifyContent="space-between"
          sx={{
            maxWidth: '470px',
            maxHeight: '80px',
            minHeight: '80px',
            padding: '20px',
          }}
        >
          <Typography variant="subtitle2">
            {title}({year})
          </Typography>
          <Typography variant="subtitle2">{rating}</Typography>
        </Stack>
      </StyledLink>
    </Card>
  );
}
