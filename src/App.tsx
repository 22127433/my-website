import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/tsx/Header';
import Home from './components/tsx/Home';
import About from './components/tsx/About';
import Interest from './components/tsx/Interests';
import Games from './components/tsx/Games';
import Movies from './components/tsx/Movies';
import Landscapes from './components/tsx/Landscapes';
import Musics from './components/tsx/Musics';
import Education from './components/tsx/Education';
import Footer from './components/tsx/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/interest" element={<Interest />}>
            <Route path="games" element={<Games />} />
            <Route path="movies" element={<Movies />} />
            <Route path="landscapes" element={<Landscapes />} />
            <Route path="musics" element={<Musics />} />
          </Route>
          <Route path="/education" element={<Education />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
