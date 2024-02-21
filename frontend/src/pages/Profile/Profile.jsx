import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from '../../app/actions/action';
import Account from '../../components/Account/Account';
import EditNameForm from "../../components/EditNameForm/EditNameForm";
import './Profile.css';

export default function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(userProfile());

  const [isEditing, setIsEditing] = useState(false);
  const firstname = useSelector((state) => state?.user?.userData?.body?.firstName);
  const isAuthenticated = !!localStorage.getItem('token');
  const lastname = useSelector((state) => state?.user?.userData?.body?.lastName);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className='profile_heading'>
        <span>Welcome back</span>
        {isEditing && (
          <EditNameForm onCancel={handleCancelClick} firstname={firstname} lastname={lastname} />
        )}
        {!isEditing && (
          <>
            <span>{firstname} {lastname}!</span>
            <button className='profile_edit' onClick={handleEditClick}>Edit name</button>
          </>
        )}
      </div>
      <section className='profile_accounts'>
            <Account titre="Argent Bank Checking (x8349)" montant="$2,082.79" description="Available Balance" />
            <Account titre="Argent Bank Savings (x6712)" montant="$10,928.42" description="Available Balance" />
            <Account titre="Argent Bank Credit Card (x8349)" montant="$184.30" description="Current Balance" />
      </section>
    </div>
  );
};
