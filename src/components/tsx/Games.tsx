import React, { useState } from 'react';
import witcherImg from '../assets/witcher.jpg';
import lastOfUsImg from '../assets/last-of-us.jpeg';
import cyberpunkImg from '../assets/cyberpunk.jpeg';
import '../css/Games.css';

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
    description: 'An open-world RPG where you play as Geralt of Rivia, a monster hunter.',
    developer: 'CD Projekt Red',
    year: 2015,
    img: witcherImg
  },
  {
    title: 'The Last of Us',
    description: 'A story-driven game where you navigate a post-apocalyptic world.',
    developer: 'Naughty Dog',
    year: 2013,
    img: lastOfUsImg
  },
  {
    title: 'Cyberpunk 2077',
    description: 'An open-world, action-adventure story set in Night City.',
    developer: 'CD Projekt Red',
    year: 2020,
    img: cyberpunkImg
  }
];

const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<number | null>(null);

  const handleGameClick = (gameIndex: number) => {
    setSelectedGame(gameIndex);
  };

  const closeGameInfo = () => {
    setSelectedGame(null);
  };

  return (
    <section className="games">
      <h1>Favorite Games</h1>
      <ul className="game-list">
        {gamesData.map((game, index) => (
          <li key={index} onClick={() => handleGameClick(index)}>
            <img src={game.img} alt={game.title} className="game-poster" />
            <div className="game-title">{game.title}</div>
          </li>
        ))}
      </ul>
      {selectedGame !== null && (
        <div className="game-info">
          <button className="close-btn" onClick={closeGameInfo}>
            Close
          </button>
          <h3>{gamesData[selectedGame].title}</h3>
          <p><strong>Developer:</strong> {gamesData[selectedGame].developer}</p>
          <p><strong>Year:</strong> {gamesData[selectedGame].year}</p>
          <p>{gamesData[selectedGame].description}</p>
        </div>
      )}
    </section>
  );
};

export default Games;