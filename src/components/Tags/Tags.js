import React from 'react';
import style from './Tags.module.scss';

const Tags = ({ tagsClickHandleFunction }) => {
  const tags = ['home', 'work', 'excercise', 'health', 'gaming', 'mindfullness', 'joga'];
  return (
    <div className={style.wrapper} data-testid='tasks-form-tags-wrapper'>
      {tags.map((item) => (
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
      ))}
    </div>
  );
};

export default Tags;
