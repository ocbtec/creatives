import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLandingPage = props => {
  console.log(props);

  return (
    <Link
      to={{
        pathname: props.to.pathname,
        state: {
          userName: props.name,
          avatarImage: props.avatar,
          token: props.token
        }
      }}>
      <button id={props.idButton} className='button'>
        <div id={props.idText}>{props.buttonText}</div>
      </button>
    </Link>
  );
};

export default ButtonLandingPage;
