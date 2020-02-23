import React, { Fragment, useState } from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../css/notFound404.css';

const NotFound404 = props => {
  console.log(props.history);
  const goBack = e => {
    e.preventDefault();
    props.history.go(-1);
  };

  return (
    <Fragment>
      <div className='main-container'>
        <Header2 />

        <button id='back-button' onClick={goBack}>
          Back
        </button>

        <Footer />
      </div>
    </Fragment>
  );
};

export default NotFound404;
