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
  console.log(props.index);

  let imageIcon;
  props.categoryIcon === 'select'
    ? (imageIcon = iconPathSelect[props.index])
    : (imageIcon = iconPathDeselect[props.index]);

  let bla = require([imageIcon]);
  // console.log(bla);

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
