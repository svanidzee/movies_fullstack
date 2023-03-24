import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MainLayout from './components/layout/MainLayout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}
