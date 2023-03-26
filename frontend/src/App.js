import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout, ErrorBoundary } from './components';
import { Movies } from './pages';

const Movie = lazy(() =>
  import(/* webpackChunkName: "Movie" */ './pages/Movie'),
);

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Movies />} />
            <Route path="/movies/:id" element={<Movie />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
