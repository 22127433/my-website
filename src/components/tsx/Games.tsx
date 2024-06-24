import React, { useState } from 'react';
import witcherImg from '../assets/witcher.jpg';
import lastOfUsImg from '../assets/last-of-us.jpeg';
import cyberpunkImg from '../assets/cyberpunk.jpeg';
import '../css/Movies-Games.css';

interface GameInfo {
  title: string;
  description: string;
  developer: string;
  year: number;
  img: string;
}

const gamesData: GameInfo[] = [
  {
    title: 'The Witcher 3: Wild Hunt',
    description: 'Một game nhập vai hành động với cốt truyện phong phú và gameplay tuyệt vời.',
    developer: 'CD Projekt Red',
    year: 2015,
    img: witcherImg
  },
  {
    title: 'The Last of Us',
    description: 'Một game hành động phiêu lưu với cốt truyện đầy cảm xúc và nhân văn.',
    developer: 'Naughty Dog',
    year: 2013,
    img: lastOfUsImg
  },
  {
    title: 'Cyberpunk 2077',
    description: 'Một game nhập vai hành động với cốt truyện hấp dẫn và thế giới mở rộng lớn.',
    developer: 'CD Projekt Red',
    year: 2020,
    img: cyberpunkImg
  }
];

const Games: React.FC = () => {
  const [selectedgame, setSelectedgame] = useState<number | null>(null);

  const handlegameClick = (gameIndex: number) => {
    setSelectedgame(gameIndex);
  };

  const closegameInfo = () => {
    setSelectedgame(null);
  };

  return (
    <section className="games">
      <h1>Favorite Games</h1>
      <ul className="game-list">
        <li onClick={() => handlegameClick(0)}>
          <img src={witcherImg} alt={gamesData[0].title} className="game-poster" />
          <div className="game-title">{gamesData[0].title}</div>
        </li>
        <li onClick={() => handlegameClick(1)}>
          <img src={lastOfUsImg} alt={gamesData[1].title} className="game-poster" />
          <div className="game-title">{gamesData[1].title}</div>
        </li>
        <li onClick={() => handlegameClick(2)}>
          <img src={cyberpunkImg} alt={gamesData[2].title} className="game-poster" />
          <div className="game-title">{gamesData[2].title}</div>
        </li>
      </ul>
      {selectedgame !== null && (
        <div className="game-info">
          <button className="close-btn" onClick={closegameInfo}>
            Close
          </button>
          <h3>{gamesData[selectedgame].title}</h3>
          <p><strong>Developer:</strong> {gamesData[selectedgame].developer}</p>
          <p><strong>Year:</strong> {gamesData[selectedgame].year}</p>
          <p>{gamesData[selectedgame].description}</p>
        </div>
      )}
    </section>
  );
};

export default Games;
