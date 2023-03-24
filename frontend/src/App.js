import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MainLayout from './components/layout/MainLayout';
import Movies from './components/Movies';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}
