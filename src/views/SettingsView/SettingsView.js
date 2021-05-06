import React, { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import { useAuth } from '../../contexts/AuthContext';
import { useUserData } from '../../contexts/UserDataContext';

const SettingsView = () => {
  const [tag, setTag] = useState('');
  const { logout } = useAuth();
  const { addTag } = useUserData();

  const handleClickEvent = async () => {
    await logout();
  };

  const handleAddTagEvent = async () => {
    await addTag(tag);
  };

  return (
    <section>
      <h2>Settings view</h2>

      <div>
        <input onChange={(event) => setTag(event.target.value)} />
        <button onClick={() => handleAddTagEvent()}> add </button>
      </div>

      <button onClick={() => handleClickEvent()}>logout</button>

      <Nav />
    </section>
  );
};

export default SettingsView;
