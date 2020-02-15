import React, { Fragment } from 'react';
import LogoAnimation from '../components/LogoAnimation';
import '../css/landingPage.css';

let userName, avatarImage, token;

const LandingPage = props => {
  if (props.location.state !== undefined) {
    userName = props.location.state.userName;
    avatarImage = props.location.state.avatarImage;
    token = props.location.state.token;
  } else {
    userName = props.userName;
    avatarImage = props.avatarImage;
    token = props.token;
  }
  return (
    <Fragment>
      <div className='landing-page-container'>
        <LogoAnimation
          userName={userName}
          avatarImage={avatarImage}
          token={token}
        />
      </div>
    </Fragment>
  );
};

export default LandingPage;
