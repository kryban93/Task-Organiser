import React from 'react';
import style from './RepeatableTasksForm.module.scss';

const RepeatableTasksForm = ({ repeatableClickHandleFunction }) => {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  return (
    <div className={style.wrapper}>
      {days.map((item) => (
        <div key={`${item}-wrapper`}>
          <input
            type='checkbox'
            value={item}
            id={item}
            className={style.input}
            key={`${item}-input`}
            onChange={(event) => repeatableClickHandleFunction(event)}
          />
          <label htmlFor={item} className={style.label} key={`${item}-label`} data-testid=''>
            {item}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RepeatableTasksForm;
