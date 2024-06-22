import React from "react";

const Musics: React.FC = () => {
  return (
    <section className="musics">
      <h2>Favorite Musics</h2>
      <ul className="music-list">
        <li>Bohemian Rhapsody</li>
        <li>Hotel California</li>
        <li>Stairway to Heaven</li>
      </ul>
    </section>
  );
};

export default Musics;