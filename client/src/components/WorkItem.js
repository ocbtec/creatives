import React from 'react';
import '../css/workItem.css';

const WorkItem = props => {
  console.log(props.workIconGeneral);

  return (
    <div className='work-item'>
      <div className='title-container'>
        <div className='title-left'>
          <div className='title-left-icon-container'>
            <div
              className='title-left-icon'
              style={{
                backgroundImage: `url(${props.workIconGeneral})`
              }}></div>
            <div className='title-left-label'>Title</div>
          </div>
        </div>
        <div className='title-right'>{props.workItemTitle}</div>
      </div>
      <div
        className='work-image-container'
        style={{ backgroundImage: `url(${props.workItemImage})` }}>
        {/* <img className='work-image' src={props.workItemImage} /> */}
      </div>
      <div className='flex-container'>
        <div>Bla</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
// workItemTitle={props.work}
// workItemCategory
// workItemCreator>

export default WorkItem;
