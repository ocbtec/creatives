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
      <div className='work-item-flex-container'>
        <div className='work-item-title-left'>Title</div>
        <div className='work-item-flex-right'>
          <div
            className='work-item-title-right-icon'
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
      <div className='work-item-flex-container'>
        <div className='work-item-category-left'>Category</div>
        <div className='work-item-flex-right'>
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
      <div id='flex-container-creator' className='work-item-flex-container'>
        <div className='work-item-creator-left'>Creator</div>
        <div className='work-item-flex-right'>
          <img
            className='showcase-avatar-image'
            src={`${props.creativeAvatar}`}
            alt='Avatar'
          />

          <div className='work-item-flex-item-right'>{props.creativeName}</div>
        </div>
      </div>
    </div>
  );
};
// workItemTitle={props.work}
// workItemCategory
// workItemCreator>

export default WorkItem;
