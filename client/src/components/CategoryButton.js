import React, { Fragment } from 'react';

const CategoryButton = props => {
  let iconPathSelect = [];
  let iconPathDeselect = [];

  props.categories.map(category => {
    iconPathSelect.push(`../images/${category.categoryIconPath}-select.png`);
    iconPathDeselect.push(
      `../images/${category.categoryIconPath}-deselect.png`
    );
    return [iconPathSelect, iconPathDeselect];
  });

  return (
    <Fragment>
      <button
        className='category-button'
        name={props.categoryName}
        onClick={e => {
          props.handleCategoryClick(e);
        }}>
        {/* <img className='category-icon' src={bla} /> */}
        <p className={props.categoryName + ' category-label'}>
          {props.categoryName}
        </p>
      </button>
    </Fragment>
  );
};

export default CategoryButton;
