import React, { useState } from 'react';
import { useUserData } from '../../contexts/UserDataContext';
import icons from '../../assets/icons';
import style from './TasksForm.module.scss';
import Tags from '../Tags/Tags';
import Categories from '../Categories/Categories';
import Loader from '../Loader/Loader';

const TasksForm = ({ handleCloseFormModal }) => {
  const [title, setTitle] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [finishTime, setFinishTime] = useState('');
  const [isTagsActive, setTagsActiveState] = useState(false);
  const [isCategoryActive, setCategoryActiveState] = useState(false);
  const [isAdditionalActive, setAdditionalActiveState] = useState(false);
  const [tagsArray, setTagsArray] = useState([]);
  const [category, setCategory] = useState('');
  const [additionalText, setAdditionalText] = useState('');
  const { submitTaskFn } = useUserData();
  const [isLoading, setLoadingState] = useState(false);

  const submitFn = async (event) => {
    event.preventDefault();
    setLoadingState(true);

    console.log(
      `${title}, ${finishDate}, ${finishTime}, ${tagsArray}, ${category}, ${additionalText}`
    );

    await submitTaskFn(title, finishDate, finishTime, tagsArray, category, additionalText);
    handleCloseFormModal();
    setLoadingState(false);
  };

  const tagsClickHandleFunction = (event) => {
    let tagsTempArray = tagsArray;

    if (!tagsArray.includes(event.target.value)) {
      tagsTempArray.push(event.target.value);
    } else {
      tagsTempArray = tagsTempArray.filter((item) => {
        return item !== event.target.value;
      });
    }

    setTagsArray(tagsTempArray);
  };

  const handleCategorySelect = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={style.wrapper}>
      <h3 className={style.header}>What's your next task?</h3>
      <button
        onClick={() => handleCloseFormModal()}
        className={`${style.btn} ${style['btn--close']}`}
      >
        <img src={icons.close_white} alt='close form modal icon' />
      </button>
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
            value={finishDate}
            onChange={(event) => setFinishDate(event.target.value)}
          />
        </div>
        <div className={style.container}>
          <label htmlFor='time'>pick time</label>
          <input
            id='time'
            type='time'
            className={style.input}
            data-testid='tasks-form-time-input'
            value={finishTime}
            onChange={(event) => setFinishTime(event.target.value)}
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
            <label htmlFor='checkbox-tags' data-testid='tasks-form-tags-label'>
              <img
                src={icons.tags_white}
                alt='tags button icon'
                className={isTagsActive ? `${style.img} ${style['img--active']} ` : style.img}
              />
              <p
                className={
                  isTagsActive
                    ? `${style.undertext} ${style['undertext--active']} `
                    : style.undertext
                }
              >
                tags
              </p>
            </label>
          </div>
          <div className={style.additional__item}>
            <input
              type='checkbox'
              value='category'
              id='checkbox-category'
              onChange={() => setCategoryActiveState(!isCategoryActive)}
            />
            <label htmlFor='checkbox-category' data-testid='tasks-form-category-label'>
              <img
                src={icons.category_white}
                alt='category button icon'
                className={isCategoryActive ? `${style.img} ${style['img--active']} ` : style.img}
              />
              <p
                className={
                  isCategoryActive
                    ? `${style.undertext} ${style['undertext--active']} `
                    : style.undertext
                }
              >
                category
              </p>
            </label>
          </div>
          <div className={style.additional__item}>
            <input
              type='checkbox'
              value='additional'
              id='checkbox-additional'
              onChange={() => setAdditionalActiveState(!isAdditionalActive)}
            />
            <label htmlFor='checkbox-additional' data-testid='tasks-form-additional-text-label'>
              <img
                src={icons.text_white}
                alt='additional button icon'
                className={isAdditionalActive ? `${style.img} ${style['img--active']} ` : style.img}
              />
              <p
                className={
                  isAdditionalActive
                    ? `${style.undertext} ${style['undertext--active']} `
                    : style.undertext
                }
              >
                additional
              </p>
            </label>
          </div>
        </div>
        {isTagsActive && <Tags tagsClickHandleFunction={tagsClickHandleFunction} />}
        {isCategoryActive && <Categories handleCategorySelect={handleCategorySelect} />}
        {isAdditionalActive && (
          <div data-testid='tasks-form-additional-text-wrapper'>
            <textarea
              type='text'
              value={additionalText}
              onChange={(event) => setAdditionalText(event.target.value)}
            />
          </div>
        )}
        <button className={`${style.btn} ${style['btn--send']}`} disabled={isLoading} type='submit'>
          add
        </button>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default TasksForm;
