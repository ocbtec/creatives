import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/showcase.css';

const Showcase = props => {
  const { userName, avatarImage, token } = props.location.state;

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
