import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <a>
          <h1 className="header-title">Your App</h1>
        </a>
      </div>
      <div className="header-right">
        <a>
          <img
            className="user-logo"
            src="https://via.placeholder.com/50"
            alt="User Logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;