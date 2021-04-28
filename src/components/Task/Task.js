import React from 'react';
import icons from '../../assets/icons';
import style from './Task.module.scss';

const Task = ({
  title,
  finishDate,
  finishTime,
  tagsArray,
  category,
  additionalText,
  isFinished,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.category} ${style[`category-${category}`]}`}></div>
      <h3>{title}</h3>

      <button className={`${style.btn} ${style['btn-more']}`}>
        <img src={icons.chevron_white} alt='see more button icon' className={style['btn_img']} />
      </button>
      <div>
        <p>{finishDate}</p>
        <p>{finishTime}</p>
        <ul className={style.tags}>
          {tagsArray ? tagsArray.map((tag) => <li key={tag}>{tag}</li>) : null}
        </ul>

        <p>{additionalText}</p>
        <p>{isFinished ? 'true' : 'false'}</p>
      </div>
    </div>
  );
};

export default Task;
