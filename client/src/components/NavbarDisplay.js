import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MessageIcon from './MessageIcon';

import '../css/navbarDisplay.css';

const NavbarDisplay = ({ userName, avatarImage }) => {
  let menuDisplayed = false;
  const menuFadeIn = () => {
    let menu = document.getElementsByClassName('menu')[0];
    let menubars = document.querySelectorAll('.menubars');

    if (menuDisplayed) {
      menu.className = 'menu menu-fade-out';
      menubars.forEach((el, index) => {
        el.className = `menubars menubar-${index + 1} menubar-${index +
          1}-close-menu`;
      });
    } else {
      menu.className = 'menu menu-fade-in';
      menubars.forEach((el, index) => {
        el.className = `menubars menubar-${index + 1} menubar-${index +
          1}-open-menu`;
      });
    }
    menuDisplayed = !menuDisplayed;
  };

  avatarImage === '' &&
    (avatarImage =
      'https://p7.hiclipart.com/preview/516/431/747/computer-icons-female-user-profile-female-girl-wife-woman-icon.jpg');

  return (
    <Fragment>
      <div className='navbar-display'>
        <MessageIcon />
        <p className='pipe-divider'>|</p>
        <Link to='/' className='avatar-link'>
          <img
            className='avatar-image'
            src={avatarImage}
            alt='profile avatar'></img>
        </Link>
        <Link to='/'>{<p className='user-name'>{userName}</p>}</Link>
        <div className='burger-menu-container'>
          <button className='menu-button' onClick={menuFadeIn}>
            <div className='menubars menubar-1'></div>
            <div className='menubars menubar-2'></div>
            <div className='menubars menubar-3'></div>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default NavbarDisplay;
