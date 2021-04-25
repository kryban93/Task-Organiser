import React from 'react';
import style from './Task.module.scss';

const Task = ({ title, finishDate, finishTime, tags, category, additionalText }) => {
  return (
    <div className={style.wrapper}>
      <h3>{title}</h3>
    </div>
  );
};

export default Task;
