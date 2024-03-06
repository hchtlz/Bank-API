import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/argentBankLogo.png';
import '../Header/Header.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../app/actions/action';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(userProfile());
  const firstname = useSelector((state) => state?.user?.userData?.body?.firstName);
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

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
        {isAuthenticated  ? (
          <>
            <Link to="/profile" className="header-item name">
              <i className="fa fa-user-circle"></i>
              {firstname}
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
