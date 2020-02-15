import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = props => {
  return (
    <Fragment>
      <div className='footer'>
        <p className='pFooter'>
          Copyright © 2020 Creatives{' '}
          <Link
            className='linkFooter'
            to={{
              pathname: '/terms',
              state: {
                userName: props.userName,
                avatarImage: props.avatarImage,
                token: props.token
              }
            }}>
            Terms & Conditions
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
