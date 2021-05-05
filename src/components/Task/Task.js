import React, { useState } from 'react';
import { useUserData } from '../../contexts/UserDataContext';
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
  taskId,
}) => {
  const [isMoreVisible, setMoreVisibleState] = useState(false);
  const { changeTaskFinishState } = useUserData();

  const handleClickOnFinishButton = (taskId) => {
    changeTaskFinishState(taskId);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={`${style.category} ${style[`category-${category}`]}`}></div>
        <div className={style.textWrapper}>
          <h3>{title}</h3>
          <p>{finishDate}</p>
          <p>{finishTime}</p>
        </div>

        <div className={style.buttonsWrapper}>
          <button
            className={`${style.btn} ${style['btn-more']}`}
            onClick={() => setMoreVisibleState(!isMoreVisible)}
          >
            <img
              src={icons.chevron_white}
              alt='see more button icon'
              className={style['btn_img']}
            />
          </button>
          <button
            className={`${style.btn} ${style['btn-finish']}`}
            dataset-taskid={taskId}
            onClick={() => handleClickOnFinishButton(taskId)}
          >
            <img
              src={!isFinished ? icons.checkbox_unchecked : icons.checkbox_checked}
              alt={`${title} - finish task button`}
            />
          </button>
        </div>
      </div>

      {isMoreVisible ? (
        <div>
          <ul className={style.tags}>
            {tagsArray
              ? tagsArray.map((tag) => (
                  <li key={tag} className={style['tags_item']}>
                    {tag}
                  </li>
                ))
              : null}
          </ul>

          <p>{additionalText}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Task;
