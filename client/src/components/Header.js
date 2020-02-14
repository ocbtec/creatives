import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavbarDisplay from './NavbarDisplay';
import Menu from './Menu';

import '../css/header.css';

const Header = ({ userName, avatarImage, token }) => {
  let menuDisplayed = false;
  const menuFadeIn = () => {
    let menu = document.getElementsByClassName('menu')[0];
    menuDisplayed
      ? (menu.className = 'menu menu-fade-out')
      : (menu.className = 'menu menu-fade-in');
    console.log(menuDisplayed);
    menuDisplayed = !menuDisplayed;
    console.log(menuDisplayed);
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
            <img
              className='burger-menu'
              src={require('../images/menu.svg')}
              alt='menu'
            />
          </button>
        </div>
      </div>
      <Menu token={token} />
    </Fragment>
  );
};

export default Header;
