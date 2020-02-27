import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MessageIcon from './MessageIcon';

import '../css/navbarDisplay.css';

const NavbarDisplay = ({ userName, avatarImage }) => {
  avatarImage === '' &&
    (avatarImage =
      'https://p7.hiclipart.com/preview/516/431/747/computer-icons-female-user-profile-female-girl-wife-woman-icon.jpg');

  return (
    <Fragment>
      <div className='navbar-display'>
        <MessageIcon />
        <p className='pipe-divider'></p>
        <Link to='/profile' className='avatar-link'>
          <img
            className='avatar-image'
            src={avatarImage}
            alt='profile avatar'></img>
        </Link>
        <Link to='/profile'>{<p className='user-name'>{userName}</p>}</Link>
      </div>
    </Fragment>
  );
};

export default NavbarDisplay;
