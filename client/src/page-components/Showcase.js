import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/showcase.css';

let userName, avatarImage, token;

const Showcase = props => {
  if (props.location.state !== undefined) {
    userName = props.location.state.userName;
    avatarImage = props.location.state.avatarImage;
    token = props.location.state.token;
  } else {
    userName = props.userName;
    avatarImage = props.avatarImage;
    token = props.token;
  }
  console.log(userName);
  return (
    <Fragment>
      <div className='main-container'>
        <Header userName={userName} avatarImage={avatarImage} token={token} />
        <div className='showcase-body'>Showcase</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Showcase;
