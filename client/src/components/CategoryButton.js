import React, { Fragment } from 'react';

const CategoryButton = props => {
  return (
    <Fragment>
      <button
        className='category-button'
        name={props.categoryName}
        onClick={e => {
          props.handleCategoryClick(e);
        }}>
        {/* <img src={require('../images/${props.categoryIcon}')} /> */}
        <img
          className='category-icon'
          src={require('../images/category-icon-gardener-deselect.png')}
        />

        <p className={props.categoryName + ' category-label'}>
          {props.categoryName}
        </p>
      </button>
    </Fragment>
  );
};

export default CategoryButton;