import React, { useState, useEffect } from 'react';

import { useUserData } from '../../contexts/UserDataContext';
import icons from '../../assets/icons';
import Nav from '../../components/Nav/Nav';
import TasksForm from '../../components/TasksForm/TasksForm';
import style from './TasksView.module.scss';
import Task from '../../components/Task/Task';

const TasksView = () => {
  const [isFormVisible, setFormVisibleState] = useState(false);
  const { trackTasksCollection, tasksCollection } = useUserData();

  const handleCloseFormModal = () => {
    setFormVisibleState(false);
  };

  useEffect(() => {
    trackTasksCollection();
  }, []);

  return (
    <section className={style.wrapper}>
      <h2>Tasks for today</h2>

      {tasksCollection
        ? tasksCollection.map((task) => (
            <Task
              title={task.title}
              finishDate={task.finishDate}
              finishTime={task.finishTime}
              tagsArray={task.tagsArray}
              category={task.category}
              additionalText={task.additionalText}
              isFinished={task.isFinished}
              key={task.title}
            />
          ))
        : null}

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
