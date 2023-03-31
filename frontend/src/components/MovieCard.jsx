import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function MovieCard({ poster, ...other }) {
  return (
    <Card
      sx={{
        backgroundColor: 'green',
      }}
    >
      <CardContent>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row', md: 'row' },
          }}
          spacing={3}
        >
          <Grid item>
            <CardMedia
              component="img"
              image={poster ?? require('../assets/img/no.jpg')}
              alt="No image avaliable"
              sx={{
                marginBottom: { xs: '2em', sm: 0 },
                maxWidth: { xs: 420, sm: '40em' },
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid
            item
            direction="column"
            sx={{
              width: '420px',
              marginLeft: { xs: 0, sm: '1em' },
            }}
          >
            {Object.entries(other).map(([key, val]) => (
              <Typography variant="body2">
                <Typography
                  sx={{ fontWeight: 600, textTransform: 'capitalize' }}
                  component="span"
                >
                  {key}:{''}
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
