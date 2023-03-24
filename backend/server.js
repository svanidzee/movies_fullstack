import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('*', (req, res) => {
  res.status(200).json({ data: 1212 });
});

app.use('*', (req, res) => {
  res.status(404).json({ error: 'not found' });
});

export default app;
