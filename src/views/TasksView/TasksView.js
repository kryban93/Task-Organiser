import React, { useState } from 'react';
import icons from '../../assets/icons';
import Nav from '../../components/Nav/Nav';
import TasksForm from '../../components/TasksForm/TasksForm';
import style from './TasksView.module.scss';

const TasksView = () => {
  const [isFormVisible, setFormVisibleState] = useState(false);

  const handleCloseFormModal = () => {
    setFormVisibleState(false);
  };

  return (
    <section className={style.wrapper}>
      <h2>Tasks for today</h2>
      {isFormVisible ? <TasksForm handleCloseFormModal={handleCloseFormModal} /> : null}

      <button
        className={style.btn}
        data-testid='tasks-view-open-modal-button'
        onClick={() => setFormVisibleState(!isFormVisible)}
      >
        <img src={icons.plus_white} alt='open task form button' className={style['btn__img']} />
      </button>
      <Nav />
    </section>
  );
};

export default TasksView;
