// src/components/Landscape.tsx
import React from 'react';
// import './Landscape.css';

const Landscape: React.FC = () => {
  return (
    <section className="landscape">
      <h2>Beautiful Landscapes</h2>
      <img src="landscape1.jpg" alt="Landscape 1" />
      <img src="landscape2.jpg" alt="Landscape 2" />
    </section>
  );
};

export default Landscape;
