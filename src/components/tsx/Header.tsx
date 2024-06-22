import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <p className="logo">Anh Tú</p>
        <ul className='header-nav-list'>
          <li className='header-nav-item'>
            <Link to="/home" className="header-nav-item-link">
              Home
            </Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/about" className="header-nav-item-link">
              About
            </Link>
          </li>
          <li className='header-nav-item'>
            <Link to="/interests" className="header-nav-item-link">
              Interests
            </Link>
            <div className='header-nav-item-interests'>
                <ul className='header-nav-dropdown'>
                  <li className='header-nav-dropdown-item'>
                    <Link to="/interests/games" className="header-nav-dropdown-item-link">
                      Games
                    </Link>
                  </li>
                  <li className='header-nav-dropdown-item'>
                    <Link to="/interests/movies" className="header-nav-dropdown-item-link">
                      Movies
                    </Link>
                  </li>
                  <li className='header-nav-dropdown-item'>
                    <Link to="/interests/landscapes" className="header-nav-dropdown-item-link">
                      Landscapes
                    </Link>
                  </li>
                  <li className='header-nav-dropdown-item'>
                    <Link to="/interests/musics" className="header-nav-dropdown-item-link">
                      Musics
                    </Link>
                  </li>
                </ul>
            </div>
          </li>
          <li className='header-nav-item'>
            <Link to="/education" className="header-nav-item-link">
              Education
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
