import React, { useState } from 'react';
import './styles.scss';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
      <nav className="navbar">
        <div className="navbar-logo">Trippospace</div>
        <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Contact</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </nav>
  );
}

export default Navbar;
