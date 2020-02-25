import React, { Fragment, useState } from 'react';
import MenuLink from './MenuLink';
import {
  homeLink,
  aboutLink,
  showcaseLink,
  searchLink,
  loginLink,
  userProfileLink,
  creativeProfileLink,
  worksLink,
  logoutLink
} from '../scripts/menuLinksConstructor';
import '../css/menu.css';

// static links
let menuDisplayed = false;
const Menu = props => {
  // console.log(props);

  const [linksArray, setLinksArray] = useState([
    homeLink,
    aboutLink,
    showcaseLink,
    searchLink
  ]);

  const [menuDisplayed, setMenuDisplayed] = useState(false);

  const menuFadeIn = () => {
    // logged in as creative
    if (props.creative === 'true') {
      if (!linksArray.includes(worksLink)) {
        setLinksArray([
          ...linksArray,
          worksLink,
          creativeProfileLink,
          logoutLink
        ]);
      }
    }
    // logged in as user
    else if (props.creative === 'false') {
      if (!linksArray.includes(userProfileLink)) {
        setLinksArray([...linksArray, userProfileLink, logoutLink]);
      }
    }
    // logged out
    else if (props.token === undefined || props.token === '') {
      if (!linksArray.includes(loginLink)) {
        setLinksArray([...linksArray, loginLink]);
      }
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
      setMenuDisplayed(!menuDisplayed);
    } else {
      menu.className = 'menu menu-fade-out';
      menubars.forEach((el, index) => {
        el.className = `menubars menubar-${index + 1} menubar-${index +
          1}-close-menu`;
      });
      setMenuDisplayed(!menuDisplayed);
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
                creative={props.creative}
                categories={props.categories}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Menu;
