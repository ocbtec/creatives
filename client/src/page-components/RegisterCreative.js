import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/registerCreative.css';

const RegisterCreative = props => (
  <Fragment>
    <div className='main-container'>
      <Header
        userName={props.userName}
        avatarImage={props.avatarImage}
        token={props.token}
      />
      <div className='register-creative-body'>Register Creative</div>
      <Footer />
    </div>
  </Fragment>
);

export default RegisterCreative;
