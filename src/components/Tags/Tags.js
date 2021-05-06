import React from 'react';
import { useUserData } from '../../contexts/UserDataContext';
import style from './Tags.module.scss';

const Tags = ({ tagsClickHandleFunction }) => {
  const { tagsArray } = useUserData();

  return (
    <div className={style.wrapper} data-testid='tasks-form-tags-wrapper'>
      {tagsArray
        ? tagsArray.map((item) => (
            <div key={`${item}-wrapper`}>
              <input
                type='checkbox'
                value={item}
                id={item}
                className={style.input}
                key={`${item}-input`}
                onChange={(event) => tagsClickHandleFunction(event)}
              />
              <label htmlFor={item} className={style.label} key={`${item}-label`} data-testid=''>
                {item}
              </label>
            </div>
          ))
        : null}
    </div>
  );
};

export default Tags;
