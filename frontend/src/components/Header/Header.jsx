import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/images/argentBankLogo.png';
import '../Header/Header.css';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header-logo">
        <img
          className="header-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/sign-in" className="header-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </header>
  );
}
