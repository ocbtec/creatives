import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavbarDisplay from './NavbarDisplay';
import Menu from './Menu';

import '../css/header.css';

const Header = ({ userName, avatarImage, token }) => {
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
      </div>
      <Menu userName={userName} avatarImage={avatarImage} token={token} />
    </Fragment>
  );
};

export default Header;
