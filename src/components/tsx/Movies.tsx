// src/components/tsx/Movies.tsx
import React from 'react';
// import './Movies.css';

const Movies: React.FC = () => {
  return (
    <section className="books">
      <h2>Favorite Movies</h2>
      <ul className="movie-list">
        <li>Interstellar</li>
        <li>Shutter Island</li>
        <li>Oldboy</li>
      </ul>
    </section>
  );
};

export default Movies;
