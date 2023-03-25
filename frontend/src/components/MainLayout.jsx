import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './';

export default function MainLayout() {
  return (
    <div
      className="wrapper"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
