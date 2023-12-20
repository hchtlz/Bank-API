import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../../services/services';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else {
      fetchUserProfile(token)
        .then((response) => {
          if (response.status === 200) {
            setUserProfile(response.body);
          }
        })
        .catch((error) => {
        });
    }
  }, [navigate]);

  return (
    <div className="profile">
      <h1 className='profile_heading'>Welcome back<br />{userProfile && userProfile.firstName} {userProfile && userProfile.lastName}!</h1>
      <button className='profile_edit'>Edit name</button>
    </div>
  );
};

export default Profile;
