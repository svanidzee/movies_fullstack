import { Container, Typography } from '@mui/material';

export default function Header() {
  return (
    <Container variant="header" sx={{ paddingY: 2 }}>
      <Typography variant="caption">
        “The lies are in the dialogue, the truth is in the visuals.” – Kelly
        Reichardt
      </Typography>
    </Container>
  );
}
