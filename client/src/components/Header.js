import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import NavbarDisplay from './NavbarDisplay';
import Menu from './Menu';

import '../css/header.css';

const Header = ({
  userName,
  avatarImage,
  token,
  creative,
  categories,
  displayMenu = true
}) => {
  const [showMenu, setShowMenu] = useState(true);

  const getShowMenu = useCallback(() => {
    setShowMenu(displayMenu);
  }, [displayMenu]);

  useEffect(() => {
    getShowMenu();
  }, [getShowMenu]);

  return (
    <Fragment>
      <div className='header'>
        <div className='header-logo-container'>
          <Link
            to={{
              pathname: '/',
              state: {
                userName: userName,
                avatarImage: avatarImage,
                token: token,
                creative: creative
              }
            }}>
            <img
              className='header-logo'
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
            creative={creative}
          />
        )}
      </div>
      {showMenu === true && (
        <Menu
          userName={userName}
          avatarImage={avatarImage}
          token={token}
          creative={creative}
          categories={categories}
        />
      )}
    </Fragment>
  );
};

export default Header;
