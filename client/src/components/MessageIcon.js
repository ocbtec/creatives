import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/messageIcon.css';

const MessageIcon = () => {
  return (
    <Fragment>
      <Link to='/messaging'>
        <img
          className='message-icon'
          src={require('../images/message.png')}
          alt='message icon'></img>
      </Link>
    </Fragment>
  );
};

export default MessageIcon;
