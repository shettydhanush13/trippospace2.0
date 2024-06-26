import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './styles.scss';

const Header = () => {

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>Trippospace</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="icons">
        <FaShoppingCart className="cart-icon" />
        <FaUser className="profile-icon" />
      </div>
    </header>
  );
};

export default Header;
