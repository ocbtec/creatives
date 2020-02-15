import React, { Fragment } from 'react';
import MenuLink from './MenuLink';
import {
  homeLink,
  aboutLink,
  showcaseLink,
  searchLink,
  loginLink,
  userProfileLink,
  worksLink
} from '../scripts/menuLinksConstructor';
import '../css/menu.css';

const linksArray = [
  homeLink,
  aboutLink,
  showcaseLink,
  searchLink,
  loginLink,
  userProfileLink,
  worksLink
];

const Menu = props => {
  return (
    <Fragment>
      <div className='menu-container'>
        <ul className='menu'>
          {linksArray.map((link, index) => {
            return (
              <MenuLink
                key={index}
                linkTo={link.linkTo}
                linkText={link.linkText}
                iconPath={link.iconPath}
                userName={props.userName}
                avatarImage={props.avatarImage}
                token={props.token}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Menu;
