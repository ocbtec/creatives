import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/works.css';

const Works = props => (
  <Fragment>
    <div className='main-container'>
      <Header
        userName={props.location.state.userName}
        avatarImage={props.location.state.avatarImage}
        token={props.location.state.token}
        creative={props.location.state.creative}
      />
      <div className='works-body'>Works</div>
      <Footer
        userName={props.location.state.userName}
        avatarImage={props.location.state.avatarImage}
        token={props.location.state.token}
        categories={props.location.state.categories}
      />
    </div>
  </Fragment>
);

export default Works;
