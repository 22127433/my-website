import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/tsx/Header';
import Home from './components/tsx/Home';
import About from './components/tsx/About';
import Games from './components/tsx/Games';
import Movies from './components/tsx/Movies';
import Landscapes from './components/tsx/Landscapes';
import Footer from './components/tsx/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interests/games" element={<Games />} />
          <Route path="/interests/movies" element={<Movies />} />
          <Route path="/interests/landscapes" element={<Landscapes />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
