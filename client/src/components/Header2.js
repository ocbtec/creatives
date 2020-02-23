import React, { Fragment } from 'react';

import '../css/header.css';

const Header2 = () => {
  return (
    <Fragment>
      <div className='header'>
        <div className='header-logo-container'>
          <img
            className='header-logo'
            src={require('../images/logo.svg')}
            alt='logo'
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Header2;
