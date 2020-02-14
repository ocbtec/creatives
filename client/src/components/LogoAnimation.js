import React, { Fragment } from 'react';
import ButtonLandingPage from './ButtonLandingPage';
import {
  loginButton,
  showcaseButton,
  userButton,
  creativeButton
} from '../scripts/landingPageButtonConstructor';
import '../css/logoAnimation.css';

const buttonArray = [loginButton, showcaseButton, userButton, creativeButton];

const LogoAnimation = () => {
  return (
    <Fragment>
      <div className='container'>
        <div className='background-absolute'>
          <img id='waves' src={require('../images/waves.jpg')} alt='waves' />
        </div>
        <div className='animated-logo-small-part'>
          <img
            src={require('../images/animated-logo-2.svg')}
            alt='animated-logo-2'
          />
        </div>
        <div className='animated-logo-big-part'>
          <img
            src={require('../images/animated-logo-1.svg')}
            alt='animated-logo-1'
          />
        </div>
        <div className='button-container'>
          {buttonArray.map((obj, index) => {
            return (
              <ButtonLandingPage
                key={index}
                idButton={obj.idButton}
                idText={obj.idText}
                buttonText={obj.buttonText}
                linkTo={obj.linkTo}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default LogoAnimation;
