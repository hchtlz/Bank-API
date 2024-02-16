import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../app/actions/action';
import Account from '../../components/Account/Account';
import './Profile.css';


export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(userProfile());

  const firstname = useSelector((state) => state?.user?.userData?.body?.firstName);
  const isAuthenticated = !!localStorage.getItem('token');
  const lastname = useSelector((state) => state?.user?.userData?.body?.lastName);
  console.log(firstname);
  console.log(lastname);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="profile">
      <h1 className='profile_heading'>Welcome back<br />{firstname} {lastname}!</h1>
      <button className='profile_edit'>Edit name</button>
      <section className='profile_accounts'>
            <Account titre="Argent Bank Checking (x8349)" montant="$2,082.79" description="Available Balance" />
            <Account titre="Argent Bank Savings (x6712)" montant="$10,928.42" description="Available Balance" />
            <Account titre="Argent Bank Credit Card (x8349)" montant="$184.30" description="Current Balance" />
      </section>
    </div>
  );
};
