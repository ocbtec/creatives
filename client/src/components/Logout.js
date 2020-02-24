import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => (
  //Redirect function
  <Redirect
    to={{
      pathname: '/',
      state: {
        userName: '',
        avatarImage: '',
        token: '',
        creative: '',
        categories: ''
      }
    }}
  />
);

export default Logout;
