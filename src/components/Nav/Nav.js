import React from 'react';
import { Link } from 'react-router-dom';
import { useAppData } from '../../contexts/AppDataContext';
import style from './Nav.module.scss';
import icons from '../../assets/icons';

const Nav = () => {
  const { selectedView, setSelectedView } = useAppData();

  return (
    <nav className={style.wrapper} data-testid='nav'>
      <Link to='/dashboard' onClick={() => setSelectedView('home')} data-testid='nav-home-btn'>
        <img
          src={selectedView === 'home' ? icons.home_active : icons.home}
          alt='home button'
          data-testid='nav-home-btn-img'
        />
      </Link>
      <Link to='/tasks' onClick={() => setSelectedView('tasks')} data-testid='nav-tasks-btn'>
        <img
          src={selectedView === 'tasks' ? icons.tasks_active : icons.tasks}
          alt='tasks button'
          data-testid='nav-tasks-btn-img'
        />
      </Link>
      <Link to='/notes' onClick={() => setSelectedView('notes')} data-testid='nav-notes-btn'>
        <img
          src={selectedView === 'notes' ? icons.notes_active : icons.notes}
          alt='notes button'
          data-testid='nav-notes-btn-img'
        />
      </Link>
      <Link
        to='/settings'
        onClick={() => setSelectedView('settings')}
        data-testid='nav-settings-btn'
      >
        <img
          src={selectedView === 'settings' ? icons.settings_active : icons.settings}
          alt='settings button'
          data-testid='nav-settings-btn-img'
        />
      </Link>
    </nav>
  );
};

export default Nav;
