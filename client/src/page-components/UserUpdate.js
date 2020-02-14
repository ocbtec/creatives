import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/userUpdate.css';

const UserUpdate = () => {
  return (
    <Fragment>
      <div className='main-container'>
        <Header />
        <div className='user-update-body'>User Update</div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default UserUpdate;
