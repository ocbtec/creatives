import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spinner } from '../components/Spinner';

import '../css/registerUser.css';

const RegisterUser = props => {
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
  const [loading, setLoading] = useState(false);
  const [registerButtonActive, setRegisterButtonActive] = useState({
    button: {
      active: '',
      opacity: 1,
      userName: 'upload avatar',
      avatarPath: ''
    }
  });

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

  document.addEventListener('keypress', e => {
    e.keyCode === 13 && e.preventDefault();
  });

  //OnChange event Listener for all input fields and buttons
  const onChange = e => {
    e.target.files && uploadToCloudinary(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkboxClick = e => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  //Cloudinary
  const uploadToCloudinary = async x => {
    setRegisterButtonActive({
      ...registerButtonActive,
      button: {
        active: 'none',
        opacity: 0.3,
        userName: 'upload avatar',
        avatarPath: ''
      }
    });

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

    if (file) {
      setRegisterButtonActive({
        ...registerButtonActive,
        button: {
          active: 'all',
          opacity: 1,
          userName: document.getElementById('userName').value,
          avatarPath: file.secure_url
        }
      });
    }
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
      <div className='register-user-main-container'>
        <Header
          userName={user.name}
          avatarImage={user.avatar}
          token={token}
          creative={user.creative}
          categories={props.location.state.categories}
        />
        <div className='register-user-body'>
          <div className='image-container'>
            <div className='image-container-2'></div>
            <div className='image-lightning-1'></div>
            <div className='image-lightning-2'></div>
            <div className='image-lightning-3'></div>
          </div>
          <div className='register-user-container'>
            <div className='flex-item headline'>
              <img
                className='register-icon'
                src={require('../images/register-user-icon.svg')}
                alt='Register-Icon'
              />
              <h1>Register as User</h1>
            </div>
            <div className='flex-item headline-2'>
              Please fill in all fields to Register
            </div>
            <form
              className='form-container flex-item'
              onSubmit={e => onSubmit(e)}>
              <input style={{ display: 'none' }} />
              <input type='password' style={{ display: 'none' }} />
              <input
                id='userName'
                className='input-text'
                type='text'
                placeholder='* User name'
                name='name'
                value={name}
                maxLength='18'
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

              <div className='required-label'>* required</div>

              <div className='checkbox-container-outer'>
                <div className='checkbox-container-inner'>
                  <input
                    className='input-checkbox'
                    type='checkbox'
                    placeholder='Make Email public'
                    name='emailVisible'
                    onClick={e => checkboxClick(e)}
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
                    onClick={e => checkboxClick(e)}
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
                    onClick={e => checkboxClick(e)}
                    defaultChecked={subscribeToNewsletter}
                  />
                  <p className='checkbox-label'>subscribe to newsletter</p>
                </div>
                <div className='line'></div>
                <div className='avatar-container'>
                  <div className='avatar-container-left'>
                    <div className='upload-avatar'>
                      {registerButtonActive.button.avatarPath === '' ? (
                        <img
                          className='user-icon'
                          src={require('../images/user-icon-dark.png')}
                          alt='User icon'
                        />
                      ) : (
                        <img
                          className='user-icon'
                          src={registerButtonActive.button.avatarPath}
                          alt='User icon'
                        />
                      )}
                      <span>{registerButtonActive.button.userName}</span>
                    </div>
                    <input
                      className='choose-file'
                      type='file'
                      placeholder='Upload an avatar'
                      name='avatar'
                      value={avatar}
                      onChange={e => onChange(e)}
                    />
                  </div>
                </div>

                <div className='line'></div>
                <button
                  style={{
                    pointerEvents: registerButtonActive.button.active,
                    opacity: registerButtonActive.button.opacity
                  }}
                  className='register-button'>
                  Register
                </button>
              </div>
              <div className='error-message'>{errorValue}</div>
            </form>
          </div>
        </div>
        <Footer userName={user.name} avatarImage={user.avatar} token={token} />
        {loading ? <Spinner /> : renderRedirect()}
      </div>
    </Fragment>
  );
};

export default RegisterUser;
