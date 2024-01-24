import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/argentBankLogo.png';
import '../Header/Header.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../app/actions/action';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const isAuthenticated = token ? true : false;

  const { firstName } = useSelector((state) => state.userReducer);
  console.log(firstName);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // PROBLEME JE N'ARRIVE PAS A RECUPERER LE FIRSTNAME DANS LE REDUCER

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
      <div className='header-links'>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="header-item name">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <button className="header-item logout" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login" className="header-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}
