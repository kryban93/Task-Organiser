import React from 'react';
import style from './Categories.module.scss';
import icons from '../../assets/icons';

const Categories = ({ handleCategorySelect }) => {
  return (
    <div className={style.wrapper}>
      <input
        type='radio'
        name='category'
        value='yellow'
        id='category-yellow'
        className={style.input}
        onChange={(event) => handleCategorySelect(event)}
      />
      <label htmlFor='category-yellow' className={style.label}>
        <img src={icons.category_yellow} alt='yellow category' />
      </label>
      <input
        type='radio'
        name='category'
        value='orange'
        id='category-orange'
        className={style.input}
        onChange={(event) => handleCategorySelect(event)}
      />
      <label htmlFor='category-orange' className={style.label}>
        <img src={icons.category_orange} alt='orange category' />
      </label>
      <input
        type='radio'
        name='category'
        value='red'
        id='category-red'
        className={style.input}
        onChange={(event) => handleCategorySelect(event)}
      />
      <label htmlFor='category-red' className={style.label}>
        <img src={icons.category_red} alt='red category' />
      </label>
      <input
        type='radio'
        name='category'
        value='green'
        id='category-green'
        className={style.input}
        onChange={(event) => handleCategorySelect(event)}
      />
      <label htmlFor='category-green' className={style.label}>
        <img src={icons.category_green} alt='green category' />
      </label>
      <input
        type='radio'
        name='category'
        value='blue'
        id='category-blue'
        className={style.input}
        onChange={(event) => handleCategorySelect(event)}
      />
      <label htmlFor='category-blue' className={style.label}>
        <img src={icons.category_blue} alt='blue category' />
      </label>
      <input
        type='radio'
        name='category'
        value='purple'
        id='category-purple'
        className={style.input}
        onChange={(event) => handleCategorySelect(event)}
      />
      <label htmlFor='category-purple' className={style.label}>
        <img src={icons.category_purple} alt='purple category' />
      </label>
    </div>
  );
};

export default Categories;
