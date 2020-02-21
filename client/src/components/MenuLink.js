import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = props => {
  return (
    <Link
      to={{
        pathname: props.linkTo,
        state: {
          userName: props.userName,
          avatarImage: props.avatarImage,
          token: props.token,
          creative: props.creative
        }
      }}>
      <li className='menu-item'>
        {props.linkText}
        {props.iconPath}
      </li>
    </Link>
  );
};

export default MenuLink;
