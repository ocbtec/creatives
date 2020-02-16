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

    if (e.target.files) {
      let userAvatarUpload;
      userAvatarUpload = document.getElementsByClassName('user-icon')[0];
      userAvatarUpload.style.cssText =
        'width: auto; height: 80px; clip-path: circle(40px at center);';
      userAvatarUpload.src = URL.createObjectURL(e.target.files[0]);
    }
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
  let errorValue;
  listErrors.length > 0 && (errorValue = listErrors);

  return (
    <Fragment>
      <div className='main-container'>
        <Header userName={user.name} avatarImage={user.avatar} token={token} />
        <div className='register-user-body'>
          <div className='image-container'>
            <div className='image-container-2'></div>
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
                <div className='required-label'>* required</div>
                <div className='line'></div>
                <div className='avatar-container'>
                  <div className='upload-avatar'>
                    <span>upload avatar</span>
                    <input
                      className='choose-file'
                      type='file'
                      placeholder='Upload an avatar'
                      name='avatar'
                      value={avatar}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='user-icon-container'>
                    <img
                      className='user-icon'
                      src={require('../images/user-icon-dark.png')}
                      alt='User icon'
                    />
                  </div>
                </div>
                {renderRedirect()}
                <div className='line'></div>
                <button className='register-button'>Register</button>
              </div>
              <div className='error-message'>{errorValue}</div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default RegisterUser;
