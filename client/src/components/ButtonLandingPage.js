import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLandingPage = props => {
  let deactivated;
  props.token && props.buttonText !== 'Showcase'
    ? (deactivated = 'logoAnimation-button logoAnimation-button-deactivated')
    : (deactivated = 'logoAnimation-button');

  return (
    <Link
      to={{
        pathname: props.to,
        state: {
          userName: props.userName,
          avatarImage: props.avatarImage,
          token: props.token,
          creative: props.creative,
          categories: props.categories
        }
      }}>
      <button id={props.idButton} className={deactivated}>
        <div id={props.idText}>{props.buttonText}</div>
      </button>
    </Link>
  );
};

export default ButtonLandingPage;
