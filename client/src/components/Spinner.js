import React from 'react';
import '../css/spinner.css';

export const Spinner = () => {
  return (
    <div className='spinner-container'>
      <img
        className='spinner'
        src={require('../images/spin-gear.png')}
        alt='Spinner'
      />
    </div>
  );
};
