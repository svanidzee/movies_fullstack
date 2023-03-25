import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';
import Movies from './components/Movies';
import Movie from './components/Movie';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Movies />} />
        <Route path="/movies/:id" element={<Movie />} />
      </Route>
    </Routes>
  );
}
