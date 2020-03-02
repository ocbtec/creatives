import React from 'react';
import '../css/spinner.css';

export const Spinner = props => {
  return (
    <div className={props.name}>
      <img
        className={`${props.name}-image`}
        src={require('../images/spin-gear.png')}
        alt='Spinner'
      />
    </div>
  );
};
