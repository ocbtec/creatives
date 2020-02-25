import React from 'react';
import '../css/spinner.css';

export const Spinner = props => {
  console.log(props.name);

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
