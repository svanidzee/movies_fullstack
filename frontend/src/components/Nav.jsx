import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '20px',
      }}
    >
      <Link to="/" style={{ marginRight: '20px' }}>
        Home
      </Link>
      <Link to="/about">Movies</Link>
    </div>
  );
}
