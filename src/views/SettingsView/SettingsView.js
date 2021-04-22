import React from 'react';
import Nav from '../../components/Nav/Nav';
import { useAuth } from '../../contexts/AuthContext';

const SettingsView = () => {
  const { logout } = useAuth();

  const handleClickEvent = async () => {
    await logout();
  };

  return (
    <section>
      <h2>Settings view</h2>
      <button onClick={() => handleClickEvent()}>logout</button>

      <Nav />
    </section>
  );
};

export default SettingsView;
