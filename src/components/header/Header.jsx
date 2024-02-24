import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Link to="/" className="logo-link">
            <img src="/assets/Logo.png" alt="Logo" className="logo-image" />
          </Link>
        </div>
        <div className="header-center">
          <h1 className="header-title">Nöbetçi Eczaneler</h1>
        </div>
        <div className="header-right">
          <Link to="/" className="logo-link">
            <img src="/assets/Logo.png" alt="Logo" className="logo-image" />
          </Link>
        </div>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li className="nav-item"><Link to="/" className="nav-link">Anasayfa</Link></li>
          <li className="nav-item"><Link to="/faydalibilgiler" className="nav-link">Faydalı Bilgiler</Link></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
