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
        {/* <img src={require(`../images/${props.categoryIcon}`)} /> */}
        <img src={require(`../images/linkedin.svg`)} />

        <p>{props.categoryName}</p>
      </button>
    </Fragment>
  );
};

export default CategoryButton;
