import React, { useState } from 'react';
import interstellarImg from '../assets/interstellar.jpeg';
import shutterIslandImg from '../assets/shutter-island.jpeg';
import oldboyImg from '../assets/oldboy.jpeg';
import '../css/Movies-Games.css';

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
    description: 'Một nhóm phi hành gia thực hiện một nhiệm vụ cuối cùng để cứu loài người trên một hành trình tới ngoài không gian trong một lỗ đen.',
    director: 'Christopher Nolan',
    year: 2014,
    img: interstellarImg
  },
  {
    title: 'Shutter Island',
    description: 'Vào năm 1954, một cảnh sát liên bang được gửi đến một cơ sở tâm thần học trên một hòn đảo hẻo lánh để điều tra một vụ mất tích.',
    director: 'Martin Scorsese',
    year: 2010,
    img: shutterIslandImg
  },
  {
    title: 'Oldboy',
    description: 'Sau khi bị bắt giữ và giam giữ trong 15 năm, một người đàn ông được giải thoát và truy tìm kẻ bắt cóc của mình.',
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
          <img src={interstellarImg} alt={moviesData[0].title} className="movie-poster" />
          <div className="movie-title">{moviesData[0].title}</div>
        </li>
        <li onClick={() => handleMovieClick(1)}>
          <img src={shutterIslandImg} alt={moviesData[1].title} className="movie-poster" />
          <div className="movie-title">{moviesData[1].title}</div>
        </li>
        <li onClick={() => handleMovieClick(2)}>
          <img src={oldboyImg} alt={moviesData[2].title} className="movie-poster" />
          <div className="movie-title">{moviesData[2].title}</div>
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
