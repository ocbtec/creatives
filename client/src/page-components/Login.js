import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spinner } from '../components/Spinner';

import '../css/login.css';

const Login = () => {
  //states
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  //De-structure form Data
  const { email, password } = formData;

  //OnChange event Listener for all input fields and buttons
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Redirect handler
  const handleRedirect = () => {
    setRedirect(true);
  };

  //Redirect function
  const renderRedirect = () => {
    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: '/showcase',
            state: {
              userName: user.name,
              avatarImage: user.avatar,
              token: token,
              creative: user.creative
            }
          }}
        />
      );
    }
  };

  //OnSubmit event handler
  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    //Create user object
    const newUser = {
      email,
      password
    };

    //Post to backend
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post(
        'https://creatives-api.herokuapp.com/api/login',

        body,
        config
      );

      setToken(res.data.token);
      setUser(res.data.user);
      setLoading(false);
      handleRedirect();
    } catch (err) {
      setErrors(err.response.data.errors);
      setLoading(false);
    }
  };

  //Get all errors if any
  const listErrors = errors.map(error => error.msg);
  let errorValue;
  listErrors.length > 0 && (errorValue = listErrors);

  return (
    <Fragment>
      <div className='main-container'>
        <Header
          userName={user.name}
          avatarImage={user.avatar}
          token={token}
          creative={user.creative}
        />
        <div className='login-body'>
          <div className='login-container'>
            <h1 className='login-headline'>Welcome back to CREATIVES</h1>
            <img
              className='login-logo'
              src='./images/logo-inner-ball.png'
              alt='logo'
            />
            <div className='headline'>
              Please enter email and password to Login
            </div>
            <form
              className='form-container flex-item'
              onSubmit={e => onSubmit(e)}>
              <input
                className='login-input-text'
                type='email'
                placeholder='* Email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                required
              />

              <input
                className='login-input-text'
                type='password'
                placeholder='* Password'
                name='password'
                value={password}
                onChange={e => onChange(e)}
                required
                minLength='6'
                autoComplete='new-password'
              />

              <Link>
                <div className='forgot-password'>forgot password?</div>
              </Link>

              <button className='register-button'>Login</button>

              <div className='error-message'>{errorValue}</div>
            </form>
          </div>
          <div className='login-image-container'></div>
        </div>
        <Footer userName={user.name} avatarImage={user.avatar} token={token} />
        {loading ? <Spinner /> : renderRedirect()}
      </div>
    </Fragment>
  );
};

export default Login;
