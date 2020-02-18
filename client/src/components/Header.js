import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavbarDisplay from './NavbarDisplay';
import Menu from './Menu';

import '../css/header.css';

const Header = ({ userName, avatarImage, token }) => {
  let menuDisplayed = false;
  const menuFadeInOut = () => {
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
  return (
    <Fragment>
      <div className='header'>
        <div className='logo-container'>
          <Link
            to={{
              pathname: '/',
              state: {
                userName: userName,
                avatarImage: avatarImage,
                token: token
              }
            }}>
            <img
              className='logo'
              src={require('../images/logo.svg')}
              alt='logo'
            />
          </Link>
        </div>
        {token && (
          <NavbarDisplay
            userName={userName}
            avatarImage={avatarImage}
            token={token}
          />
        )}
        <div className='burger-menu-container'>
          <button className='menu-button' onClick={menuFadeInOut}>
            <div className='menubars menubar-1'></div>
            <div className='menubars menubar-2'></div>
            <div className='menubars menubar-3'></div>
          </button>
        </div>
      </div>
      <Menu userName={userName} avatarImage={avatarImage} token={token} />
    </Fragment>
  );
};

export default Header;
