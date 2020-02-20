import React, { Fragment } from 'react';

const CategoryButton = props => {
<<<<<<< HEAD
  let iconPathSelect = [];
  let iconPathDeselect = [];

  props.categories.map(category => {
    iconPathSelect.push(`../images/${category.categoryIconPath}-select.png`);
    iconPathDeselect.push(
      `../images/${category.categoryIconPath}-deselect.png`
    );
    return [iconPathSelect, iconPathDeselect];
  });

=======
>>>>>>> 326f5e94ca994eeb1a156c67dc41f5f284f362b9
  return (
    <Fragment>
      <button
        className='category-button'
        name={props.categoryName}
        onClick={e => {
          props.handleCategoryClick(e);
        }}>
        <img
          className='category-icon'
          src={props.categoryIcon}
          alt={props.categoryName}
        />
        <p className={props.categoryName + ' category-label'}>
          {props.categoryName}
        </p>
      </button>
    </Fragment>
  );
};

export default CategoryButton;
