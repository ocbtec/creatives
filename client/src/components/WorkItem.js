import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/workItem.css';

const WorkItem = props => {
  const [categoryIcon, setCategoryIcon] = useState('');

  const getCategoryIcon = async () => {
    const res = await axios.get(
      `https://creatives-api.herokuapp.com/api/getCategoryName/${props.fileCategory}`
    );
    setCategoryIcon(res.data.categoryIconPath);

    return categoryIcon;
  };
  getCategoryIcon();

  return (
    <div className='work-item-container'>
      <Link
        className='work-item-link'
        to={{
          pathname: '/creativeDetail',
          state: {
            userName: props.userName,
            avatarImage: props.avatarImage,
            token: props.token,
            creative: props.creative,
            categories: props.categories,
            creativeName: props.creativeName
          }
        }}>
        <div className='work-item-creative-name'>
          <img
            className='showcase-avatar-icon'
            src={`${props.creativeAvatar}`}
            alt='Avatar'
          />

          <div className='work-item-flex-item-right'>{props.creativeName}</div>
        </div>
      </Link>

      <div className='work-image-wrapper'>
        <Link
          to={{
            pathname: '/workDetail',
            state: {
              userName: props.userName,
              avatarImage: props.avatarImage,
              token: props.token,
              creative: props.creative,
              creativeName: props.creativeName,
              creativeAvatar: props.creativeAvatar,
              categories: props.categories,
              workId: props.workId
            }
          }}>
          <div
            className='work-image-container'
            style={{ backgroundImage: `url(${props.filePath})` }}></div>
        </Link>
        <div className='tags-container'>
          {props.tags.map((tag, index) => {
            return (
              <div key={index} className='tag'>
                {tag}
              </div>
            );
          })}
        </div>
      </div>

      <Link
        className='work-item-link'
        to={{
          pathname: '/workDetail',
          state: {
            userName: props.userName,
            avatarImage: props.avatarImage,
            token: props.token,
            creative: props.creative,
            creativeName: props.creativeName,
            creativeAvatar: props.creativeAvatar,
            categories: props.categories,
            workId: props.workId
          }
        }}>
        <div className='work-item-title-container'>
          <img
            className='showcase-category-icon'
            src={`./images/${categoryIcon}-deselect.png`}
            alt='Category icon'
          />
          <div className='work-item-title'>{props.fileTitle}</div>
        </div>
      </Link>
    </div>
  );
};

export default WorkItem;
