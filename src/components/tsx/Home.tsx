import React from 'react';
import background from '../assets/backgroundHome.png';
import '../css/Home.css';

const Home: React.FC = () => {
  return (
    <section className="home">
      <img
        src={background}
        alt="background"
        className="home-background"
      />
      <div className="home-content">
        <h1 className="home-title">Welcome to the Home Page</h1>
        <p className="home-description">
          Đây là website demo của mình, mong bro Phát chấm điểm nhẹ tay thôi
        </p>
      </div>
    </section>
  );
};

export default Home;
