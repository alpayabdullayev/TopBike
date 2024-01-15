import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const Profile = () => {
  const { role, user } = useContext(UserContext);

  return (
    <div className='py-40'>
      <h1>Username: {user}</h1>
      <h2>Role: {role}</h2>
    </div>
  );
};

export default Profile;
