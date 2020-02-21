import React, { Fragment } from 'react';

const CategoryButton = props => {
  let buttonId = props.categoryName.toLowerCase().replace(' ', '-');

  return (
    <Fragment>
      <button
        className='category-button-deselect'
        name={props.categoryName}
        onClick={e => {
          props.handleCategoryClick(e);
        }}>
        <img
          className='category-icon'
          src={props.categoryIcon}
          alt={props.categoryName}
          id={buttonId}
        />
        <p className={props.categoryName + ' category-label'}>
          {props.categoryName}
        </p>
      </button>
    </Fragment>
  );
};

export default CategoryButton;
