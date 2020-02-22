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
    <div className='work-item'>
      <div className='flex-container'>
        <div className='title-left'>Title</div>
        <div className='flex-right'>
          <div
            className='title-right-icon'
            style={{
              backgroundImage: 'url(./images/works-icon-dark.png)'
            }}></div>
          <div>{props.fileTitle}</div>
        </div>
      </div>
      <div className='work-image-wrapper'>
        <div
          className='work-image-container'
          style={{ backgroundImage: `url(${props.filePath})` }}></div>
      </div>
      <div className='flex-container'>
        <div className='category-left'>Category</div>
        <div className='flex-right'>
          <div className='showcase-category-icon-container'>
            <img
              className='showcase-category-icon'
              src={`./images/${categoryIcon}-deselect.png`}
              alt='Category icon'
            />
          </div>
          <div>{props.fileCategory}</div>
        </div>
      </div>
      <div id='flex-container-creator' className='flex-container'>
        <div className='creator-left'>Creator</div>
        <div className='flex-right'>
          <img
            className='showcase-avatar-image'
            src={`${props.creativeAvatar}`}
            alt='Avatar'
          />

          <div className='flex-item-right'>{props.creativeName}</div>
        </div>
      </div>
    </div>
  );
};
// workItemTitle={props.work}
// workItemCategory
// workItemCreator>

export default WorkItem;
