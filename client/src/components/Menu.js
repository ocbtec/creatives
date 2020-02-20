import React, { Fragment } from 'react';
import MenuLink from './MenuLink';
import {
  homeLink,
  aboutLink,
  showcaseLink,
  searchLink,
  loginLink,
  userProfileLink,
  worksLink,
  logoutLink
} from '../scripts/menuLinksConstructor';
import '../css/menu.css';

// static links
const linksArray = [homeLink, aboutLink, showcaseLink, searchLink];

let menuDisplayed = false;
const Menu = props => {
  const menuFadeIn = () => {
    // logged out
    if (!props.token) {
      linksArray.push(loginLink);
    } else if (props.creative === false) {
      linksArray.push(userProfileLink, logoutLink);
      console.log(linksArray);
    } else if (props.creative === true) {
      linksArray.push(userProfileLink, worksLink, logoutLink);
    }

    let menu = document.getElementsByClassName('menu')[0];
    let menubars = document.querySelectorAll('.menubars');
    let button = document.getElementsByClassName('menu-button')[0];
    button.removeAttribute('onlick');

    // open menu
    if (menuDisplayed === false) {
      menu.className = 'menu menu-fade-in';
      menubars.forEach((el, index) => {
        el.className = `menubars menubar-${index + 1} menubar-${index +
          1}-open-menu`;
      });
      menuDisplayed = !menuDisplayed;
    } else {
      menu.className = 'menu menu-fade-out';
      menubars.forEach((el, index) => {
        el.className = `menubars menubar-${index + 1} menubar-${index +
          1}-close-menu`;
      });
      menuDisplayed = !menuDisplayed;
    }
  };
  return (
    <Fragment>
      <div className='menu-container'>
        <div className='burger-menu-container'>
          <button className='menu-button' onClick={menuFadeIn}>
            <div className='menubars menubar-1'></div>
            <div className='menubars menubar-2'></div>
            <div className='menubars menubar-3'></div>
          </button>
        </div>
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
