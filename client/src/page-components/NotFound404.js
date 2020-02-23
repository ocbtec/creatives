import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../css/notFound404.css';

const NotFound404 = props => {
  const backClick = e => {
    e.preventDefault();
    props.history.go(-1);
  };

  return (
    <Fragment>
      <div className='main-container'>
        <Header2 />

        <button id='back-button' onClick={backClick}>
          Back
        </button>

        <Footer />
      </div>
    </Fragment>
  );
};

export default NotFound404;
