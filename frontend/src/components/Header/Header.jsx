import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/argentBankLogo.png';
import '../Header/Header.css';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../../services/services';

export default function Header() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');
  const token = localStorage.getItem('token');

  const [userFirstName, setUserFirstName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetchUserProfile(token);
        if (response.status === 200) {
          setUserFirstName(response.body.firstName);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération du profil', error);
      }
    };

    if (isAuthenticated && token) {
      fetchUser();
    }
  }, [isAuthenticated, token]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
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
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="header-item name">
              <i className="fa fa-user-circle"></i>
              {userFirstName}
            </Link>
            <button className="header-item logout" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Logout
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
