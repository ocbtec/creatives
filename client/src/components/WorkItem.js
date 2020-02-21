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
      <div className='title-container'>
        <div className='title-left'>
          <div className='title-left-icon-container'>
            <div
              className='title-left-icon'
              style={{
                backgroundImage: 'url(./images/works-icon-dark.png)'
              }}></div>
            <div className='title-left-label'>Title</div>
          </div>
        </div>
        <div className='title-right'>{props.fileTitle}</div>
      </div>
      <div
        className='work-image-container'
        style={{ backgroundImage: `url(${props.filePath})` }}></div>
      <div className='flex-container'>
        <div className='category-icon'>
          <img src={`./images/${categoryIcon}.png`} alt='Category icon' />
        </div>
        <div>Category</div>
        <div className='category-name'>{props.fileCategory}</div>
        <div>
          <img src={`${props.creativeAvatar}`} alt='Avatar' />
        </div>
        <div>Creator</div>
        <div>{props.creativeName}</div>
      </div>
    </div>
  );
};
// workItemTitle={props.work}
// workItemCategory
// workItemCreator>

export default WorkItem;
