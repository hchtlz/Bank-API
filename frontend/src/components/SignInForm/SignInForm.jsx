import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'antd';
import './SignInForm.css';
import { fetchToken } from '../../services/services';

const SignInForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetchToken(emailRef.current.value, passwordRef.current.value);
      if (response.status === 200) {
        const token = response.body.token;
        localStorage.setItem('token', token);
        localStorage.setItem('email', emailRef.current.value); // Store email

        navigate('/profile');
      } else {
        setError(response.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1 className="form-title">Sign In</h1>
      <form onSubmit={onSubmit}>
        {error && <Alert message={"Authentification Error"} type="error" showIcon />}
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="email" id="username" ref={emailRef} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
};

export default SignInForm;