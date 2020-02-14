import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = props => {
  return (
    <Link to={props.linkTo}>
      <li className='menu-item'>
        {props.linkText}
        {props.iconPath}
      </li>
    </Link>
  );
};

export default MenuLink;
