import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account/Account';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);

  return (
    <div className="profile">
      <h1 className='profile_heading'>Welcome back<br />{userProfile && userProfile.firstName} {userProfile && userProfile.lastName}!</h1>
      <button className='profile_edit'>Edit name</button>
      <section className='profile_accounts'>
            <Account titre="Argent Bank Checking (x8349)" montant="$2,082.79" description="Available Balance" />
            <Account titre="Argent Bank Savings (x6712)" montant="$10,928.42" description="Available Balance" />
            <Account titre="Argent Bank Credit Card (x8349)" montant="$184.30" description="Current Balance" />
      </section>
    </div>
  );
};

export default Profile;
