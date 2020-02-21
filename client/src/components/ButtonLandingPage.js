import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLandingPage = props => {
  return (
    <Link
      to={{
        pathname: props.to,
        state: {
          userName: props.userName,
          avatarImage: props.avatarImage,
          token: props.token,
          categories: props.categories,
          creative: props.creative
        }
      }}>
      <button id={props.idButton} className='button'>
        <div id={props.idText}>{props.buttonText}</div>
      </button>
    </Link>
  );
};

export default ButtonLandingPage;
