import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavbarDisplay from './NavbarDisplay';
import Menu from './Menu';

import '../css/header.css';

const Header = ({ userName, avatarImage, token }) => {
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
  return (
    <Fragment>
      <div className='header'>
        <div className='logo-container'>
          <Link to='/'>
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
          <button className='menu-button' onClick={menuFadeIn}>
            {/* <img
              className='burger-menu'
              src={require('../images/menu.svg')}
              alt='menu'
            /> */}
            <div className='menubars menubar-1'></div>
            <div className='menubars menubar-2'></div>
            <div className='menubars menubar-3'></div>
          </button>
        </div>
      </div>
      <Menu token={token} />
    </Fragment>
  );
};

export default Header;
