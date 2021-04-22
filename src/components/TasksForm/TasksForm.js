import React, { useState } from 'react';
import icons from '../../assets/icons';
import style from './TasksForm.module.scss';

const TasksForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isTagsActive, setTagsActiveState] = useState(false);
  const [isCategoryActive, setCategoryActiveState] = useState(false);
  const [isAdditionalActive, setAdditionalActiveState] = useState(false);

  const submitFn = (event) => {
    event.preventDefault();

    console.log(`${title}, ${date}, ${time}`);
  };

  return (
    <div className={style.wrapper}>
      <h3>What's your next task?</h3>
      <form className={style.form} onSubmit={submitFn}>
        <div className={style.container}>
          <label htmlFor='title'>title</label>
          <input
            id='title'
            type='text'
            className={style.input}
            data-testid='tasks-form-title-input'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className={style.container}>
          <label htmlFor='date'>pick date</label>
          <input
            id='date'
            type='date'
            className={style.input}
            data-testid='tasks-form-date-input'
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className={style.container}>
          <label htmlFor='time'>pick time</label>
          <input
            id='time'
            type='time'
            className={style.input}
            data-testid='tasks-form-time-input'
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>
        <div className={style.additional}>
          <div className={style.additional__item}>
            <input
              type='checkbox'
              value='tags'
              id='checkbox-tags'
              onChange={() => setTagsActiveState(!isTagsActive)}
            />
            <label htmlFor='checkbox-tags'>
              <img
                src={icons.tags_white}
                alt='tags button icon'
                className={isTagsActive ? `${style.img} ${style['img--active']} ` : style.img}
              />
              <p>tags</p>
            </label>
          </div>
          <div className={style.additional__item}>
            <input
              type='checkbox'
              value='category'
              id='checkbox-category'
              onChange={() => setCategoryActiveState(!isCategoryActive)}
            />
            <label htmlFor='checkbox-category'>
              <img
                src={icons.tags_white}
                alt='category button icon'
                className={isTagsActive ? `${style.img} ${style['img--active']} ` : style.img}
              />
              <p>category</p>
            </label>
          </div>
          <div className={style.additional__item}>
            <input
              type='checkbox'
              value='additional'
              id='checkbox-additional'
              onChange={() => setAdditionalActiveState(!isAdditionalActive)}
            />
            <label htmlFor='checkbox-additional'>
              <img
                src={icons.tags_white}
                alt='additional button icon'
                className={isTagsActive ? `${style.img} ${style['img--active']} ` : style.img}
              />
              <p>additional</p>
            </label>
          </div>
        </div>
        {isTagsActive && (
          <div>
            <p>hello tags</p>
          </div>
        )}
        {isCategoryActive && (
          <div>
            <p>hello category</p>
          </div>
        )}
        {isAdditionalActive && (
          <div>
            <p>hello additional</p>
          </div>
        )}
        <button className={style.btn}>add</button>
      </form>
    </div>
  );
};

export default TasksForm;
