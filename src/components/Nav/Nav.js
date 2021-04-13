import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Nav.module.scss';
import icons from '../../assets/icons';

const Nav = () => {
  const [activeTab, setActiveTab] = useState('');
  return (
    <nav className={style.wrapper} data-testid='nav'>
      <Link to='/' onClick={() => setActiveTab('home')} data-testid='nav-home-btn'>
        <img
          src={activeTab === 'home' ? icons.home_active : icons.home}
          alt='home button'
          data-testid='nav-home-btn-img'
        />
      </Link>
      <Link to='/tasks' onClick={() => setActiveTab('tasks')} data-testid='nav-tasks-btn'>
        <img
          src={activeTab === 'tasks' ? icons.tasks_active : icons.tasks}
          alt='tasks button'
          data-testid='nav-tasks-btn-img'
        />
      </Link>
      <Link to='/notes' onClick={() => setActiveTab('notes')} data-testid='nav-notes-btn'>
        <img
          src={activeTab === 'notes' ? icons.notes_active : icons.notes}
          alt='notes button'
          data-testid='nav-notes-btn-img'
        />
      </Link>
      <Link to='/settings' onClick={() => setActiveTab('settings')} data-testid='nav-settings-btn'>
        <img
          src={activeTab === 'settings' ? icons.settings_active : icons.settings}
          alt='settings button'
          data-testid='nav-settings-btn-img'
        />
      </Link>
    </nav>
  );
};

export default Nav;
