import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserProfile } from '../../services/services';

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
          } else {
          }
        })
        .catch((error) => {
        });
    }
  }, [navigate]);

  return (
    <div>
      <h1>Profile Page</h1>
      {userProfile && (
        <div>
          <p>ID: {userProfile.id}</p>
          <p>Email: {userProfile.email}</p>
          {/* Ajoutez d'autres informations du profil ici */}
        </div>
      )}
    </div>
  );
};

export default Profile;
