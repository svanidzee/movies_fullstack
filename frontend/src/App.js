import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from './components';
import { Movies, Movie } from './pages';

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
