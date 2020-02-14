import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../css/registerUser.css';

const RegisterUser = () => {
  //states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    emailVisible: false,
    emailNotificationAllowed: false,
    subscribeToNewsletter: false,
    avatar: ''
  });

  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState([]);
  const [redirect, setRedirect] = useState(false);

  //De-structure form Data
  const {
    name,
    email,
    password,
    emailVisible,
    emailNotificationAllowed,
    subscribeToNewsletter,
    avatar
  } = formData;

  //OnChange event Listener for all input fields and buttons
  const onChange = e => {
    e.target.files && uploadToCloudinary(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Cloudinary
  const uploadToCloudinary = async x => {
    const files = x.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'creatives');
    const cloudinaryRes = await fetch(
      'https://api.cloudinary.com/v1_1/creatives-upload/image/upload',
      {
        method: 'POST',
        body: data
      }
    );
    const file = await cloudinaryRes.json();
    setImage(file.secure_url);
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
            pathname: './showcase',
            state: {
              userName: user.name,
              avatarImage: user.avatar,
              token: token
            }
          }}
        />
      );
    }
  };

  //OnSubmit event handler
  const onSubmit = async e => {
    e.preventDefault();

    //Create user object
    const newUser = {
      name,
      email,
      password,
      emailVisible,
      emailNotificationAllowed,
      subscribeToNewsletter,
      avatar: image
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
        'https://creatives-api.herokuapp.com/api/userRegister',

        body,
        config
      );
      setToken(res.data.token);
      setUser(res.data.user);
      handleRedirect();
    } catch (err) {
      console.error(err.response.data);
      setErrors(err.response.data.errors);
    }
  };

  //Get all errors if any
  const listErrors = errors.map(error => error.msg);
  return (
    <Fragment>
      <div className='main-container'>
        <Header userName={user.name} avatarImage={user.avatar} token={token} />
        <div className='register-user-body'>
          <div className='image-container'></div>
          <div className='register-user-container'>
            <div className='flex-item headline'>
              <img
                className='register-icon'
                src={require('../images/register-user-icon.svg')}
                alt='Register-Icon'
              />
              <h1>Register as User</h1>
            </div>
            <h3 className='flex-item headline'>
              Please fill in all fields to Register
            </h3>
            <form
              className='form-container flex-item'
              onSubmit={e => onSubmit(e)}>
              <input style={{ display: 'none' }} />
              <input type='password' style={{ display: 'none' }} />
              <input
                className='input-text'
                type='text'
                placeholder='* User name'
                name='name'
                value={name}
                onChange={e => onChange(e)}
                required
              />

              <input
                className='input-text'
                type='email'
                placeholder='* Email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                required
              />

              <input
                className='input-text'
                type='password'
                placeholder='* Password'
                name='password'
                value={password}
                onChange={e => onChange(e)}
                required
                minLength='6'
                autoComplete='new-password'
              />

              <div className='checkbox-container-outer'>
                <div className='checkbox-container-inner'>
                  <input
                    className='input-checkbox'
                    type='checkbox'
                    placeholder='Make Email public'
                    name='emailVisible'
                    onChange={e => onChange(e)}
                    defaultChecked={emailVisible}
                  />
                  <p className='checkbox-label'>display email publicly</p>
                </div>
                <div className='checkbox-container-inner' id='align-items-top'>
                  <input
                    className='input-checkbox'
                    type='checkbox'
                    placeholder='Allow Email Notifications'
                    name='emailNotificationAllowed'
                    onChange={e => onChange(e)}
                    defaultChecked={emailNotificationAllowed}
                  />
                  <div>
                    <p className='checkbox-label'>allow email notifications</p>
                    <p className='checkbox-label-2'>
                      when receiving a personal message
                    </p>
                  </div>
                </div>
                <div className='checkbox-container-inner'>
                  <input
                    className='input-checkbox'
                    type='checkbox'
                    placeholder='Subscribe to our Newsletter'
                    name='subscribeToNewsletter'
                    onChange={e => onChange(e)}
                    defaultChecked={subscribeToNewsletter}
                  />
                  <p className='checkbox-label'>subscribe to newsletter</p>
                </div>
                <div className='checkbox-container-inner line'></div>
                <input
                  className='checkbox-container-inner choose-file'
                  type='file'
                  placeholder='Upload an avatar'
                  name='avatar'
                  value={avatar}
                  onChange={e => onChange(e)}
                />
                {renderRedirect()}
                <button className='register-button'>Register</button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default RegisterUser;
