import React, { useState } from 'react';
import interstellarImg from '../assets/interstellar.jpeg';
import shutterIslandImg from '../assets/shutter-island.jpeg';
import oldboyImg from '../assets/oldboy.jpeg';
import '../css/Movies.css';

type MovieInfo = {
  title: string;
  description: string;
  director: string;
  year: number;
  img: string;
}

const moviesData: MovieInfo[] = [
  {
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    director: 'Christopher Nolan',
    year: 2014,
    img: interstellarImg
  },
  {
    title: 'Shutter Island',
    description: 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.',
    director: 'Martin Scorsese',
    year: 2010,
    img: shutterIslandImg
  },
  {
    title: 'Oldboy',
    description: 'After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days.',
    director: 'Park Chan-wook',
    year: 2003,
    img: oldboyImg
  }
];

const Movies: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<number | null>(null);

  const handleMovieClick = (movieIndex: number) => {
    setSelectedMovie(movieIndex);
  };

  const closeMovieInfo = () => {
    setSelectedMovie(null);
  };

  return (
    <section className="movies">
      <h1>Favorite Movies</h1>
      <ul className="movie-list">
        <li onClick={() => handleMovieClick(0)}>
          <img src={interstellarImg} alt="Interstellar" className="movie-poster" />
          <div className="movie-title">Interstellar</div>
        </li>
        <li onClick={() => handleMovieClick(1)}>
          <img src={shutterIslandImg} alt="Shutter Island" className="movie-poster" />
          <div className="movie-title">Shutter Island</div>
        </li>
        <li onClick={() => handleMovieClick(2)}>
          <img src={oldboyImg} alt="Oldboy" className="movie-poster" />
          <div className="movie-title">Oldboy</div>
        </li>
      </ul>
      {selectedMovie !== null && (
        <div className="movie-info">
          <button className="close-btn" onClick={closeMovieInfo}>
            Close
          </button>
          <h3>{moviesData[selectedMovie].title}</h3>
          <p><strong>Director:</strong> {moviesData[selectedMovie].director}</p>
          <p><strong>Year:</strong> {moviesData[selectedMovie].year}</p>
          <p>{moviesData[selectedMovie].description}</p>
        </div>
      )}
    </section>
  );
};

export default Movies;
