import { Stack, Pagination } from '@mui/material/';

export default function Navigation({ currentPage, setCurrentPage }) {
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      sx={{ paddingY: 5 }}
    >
      <Pagination
        count={100}
        shape="rounded"
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
