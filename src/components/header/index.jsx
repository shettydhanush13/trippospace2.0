import React from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import './styles.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Trippospace</div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Shop</li>
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
