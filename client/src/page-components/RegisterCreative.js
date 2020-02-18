import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spinner } from '../components/Spinner';
import CategoryButton from '../components/CategoryButton';

import '../css/registerCreative.css';

const RegisterCreative = () => {
  //states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    emailVisible: false,
    emailNotificationAllowed: false,
    subscribeToNewsletter: false,
    avatar: '',
    city: '',
    website: '',
    youtube: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    instagram: '',
    flickr: '',
    deviantArt: '',
    pinterest: '',
    services: false,
    category: []
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
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const res = await axios.get(
      'https://creatives-api.herokuapp.com/api/getAllCategories'
    );
    setCategories(res.data);
  };

  const handleCategoryClick = e => {
    e.preventDefault();

    let categoryCheck = formData.category.indexOf(e.target.name);

    categoryCheck > -1
      ? formData.category.splice(categoryCheck, 1)
      : formData.category.push(e.target.name);
  };

  useEffect(() => {
    getCategories();
  }, []);

  //De-structure form Data
  const {
    name,
    email,
    password,
    emailVisible,
    emailNotificationAllowed,
    subscribeToNewsletter,
    avatar,
    city,
    website,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    flickr,
    deviantArt,
    pinterest,
    services,
    category
  } = formData;

  //OnChange event Listener for all input fields and buttons
  const onChange = e => {
    e.target.files && uploadToCloudinary(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialIcon = e => {
    e.preventDefault();
    let socialNetwork = document.getElementsByClassName(
      'social-media-input'
    )[0];
    let nameAtr = document.createAttribute('name');
    nameAtr.value = e.target.name;
    socialNetwork.setAttributeNode(nameAtr);
    socialNetwork.value = formData[e.target.name];
    socialNetwork.className = 'social-media-input social-media-input-animation';
    socialNetwork.placeholder = e.target.name;
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
    setLoading(true);

    //Create user object
    const newUser = {
      name,
      email,
      emailVisible,
      emailNotificationAllowed,
      subscribeToNewsletter,
      password,
      avatar: image,
      city,
      website,
      category,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram,
      flickr,
      deviantArt,
      pinterest,
      services
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
        'https://creatives-api.herokuapp.com/api/creativeRegister',

        body,
        config
      );

      setToken(res.data.token);
      setUser(res.data.creative);
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
        <Header userName={user.name} avatarImage={user.avatar} token={token} />
        <div className='register-creative-body'>
          <div className='creative-image-container'>
            <div className='creative-image-container-2'></div>
            <div className='image-lightning-1'></div>
            <div className='image-lightning-2'></div>
            <div className='image-lightning-3'></div>
          </div>
          <div className='register-container'>
            <div className='creative-headline'>
              <img
                className='register-icon'
                src={require('../images/register-user-icon.svg')}
                alt='Register-Icon'
              />
              <h1>Register as Creative</h1>
            </div>
            <div className='data-input-container'>
              <form
                className='creative-form-container'
                onSubmit={e => onSubmit(e)}>
                <div className='input-container'>
                  <input style={{ display: 'none' }} />
                  <input type='password' style={{ display: 'none' }} />
                  <input
                    id='userName'
                    className='creative-input-text'
                    type='text'
                    placeholder='User name *'
                    name='name'
                    value={name}
                    maxLength='18'
                    onChange={e => onChange(e)}
                    required
                  />
                  <input
                    className='creative-input-text'
                    type='email'
                    placeholder='Email *'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    required
                  />

                  <input
                    className='creative-input-text'
                    type='password'
                    placeholder='Password *'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    required
                    minLength='6'
                    autoComplete='new-password'
                  />

                  <input
                    className='creative-input-text'
                    type='text'
                    placeholder='City *'
                    name='city'
                    value={city}
                    onChange={e => onChange(e)}
                    required
                  />

                  <input
                    className='creative-input-text'
                    type='text'
                    placeholder='Website'
                    name='website'
                    value={website}
                    onChange={e => onChange(e)}
                  />

                  <div className='creative-required-label'>* required</div>

                  <div className='creative-checkbox-container-outer'>
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
                    <div
                      className='checkbox-container-inner'
                      id='align-items-top'>
                      <input
                        className='input-checkbox'
                        type='checkbox'
                        placeholder='Allow Email Notifications'
                        name='emailNotificationAllowed'
                        onChange={e => onChange(e)}
                        defaultChecked={emailNotificationAllowed}
                      />
                      <div>
                        <p className='checkbox-label'>
                          allow email notifications
                        </p>
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
                    <div className='creative-line'></div>

                    <div className='social-media-container'>
                      <span className='social-media-text'>
                        Social media accounts
                      </span>
                      <div className='social-media-icons-container'>
                        <button
                          className='social-media-button'
                          onClick={e => handleSocialIcon(e)}>
                          <img
                            name='twitter'
                            className='social-media-icon'
                            src={require('../images/twitter.svg')}
                          />
                        </button>

                        <button
                          className='social-media-button'
                          onClick={e => handleSocialIcon(e)}>
                          <img
                            name='flickr'
                            className='social-media-icon'
                            src={require('../images/flickr.svg')}
                          />
                        </button>

                        <button
                          className='social-media-button'
                          onClick={e => handleSocialIcon(e)}>
                          <img
                            name='facebook'
                            className='social-media-icon'
                            src={require('../images/facebook.svg')}
                          />
                        </button>

                        <button
                          className='social-media-button'
                          onClick={e => handleSocialIcon(e)}>
                          <img
                            name='instagram'
                            className='social-media-icon'
                            src={require('../images/instagram.svg')}
                          />
                        </button>

                        <button
                          className='social-media-button'
                          onClick={e => handleSocialIcon(e)}>
                          <img
                            name='youtube'
                            className='social-media-icon'
                            src={require('../images/youtube.svg')}
                          />
                        </button>

                        <button
                          className='social-media-button'
                          onClick={e => handleSocialIcon(e)}>
                          <img
                            name='linkedin'
                            className='social-media-icon'
                            src={require('../images/linkedin.svg')}
                          />
                        </button>
                      </div>
                      <input
                        className='social-media-input'
                        type='text'
                        onChange={e => onChange(e)}></input>
                    </div>
                  </div>
                  <div className='error-message'>{errorValue}</div>
                </div>

                <div className='categories-container'>
                  <div className='select-categories-label'>
                    Select your categories *
                  </div>
                  <div className='select-categories-label-2'>
                    * at least one
                  </div>
                  <div className='select-category-container'>
                    {categories.map(category => {
                      return (
                        <CategoryButton
                          key={category._id}
                          categoryName={category.categoryName}
                          categoryIcon={category.categoryIconPath}
                          handleCategoryClick={handleCategoryClick}
                        />
                      );
                    })}
                  </div>
                  <div className='available-container' id='align-items-top'>
                    <input
                      className='input-checkbox'
                      type='checkbox'
                      name='emailNotificationAllowed'
                      onChange={e => onChange(e)}
                      defaultChecked={emailNotificationAllowed}
                    />
                    <div>
                      <p className='checkbox-label-available'>
                        available for services
                      </p>
                      <p className='checkbox-label-2'>
                        hereby you offer to create customized art pieces
                      </p>
                    </div>
                  </div>
                  <div className='creative-line-long'></div>
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
                  <div className='creative-line-long'></div>
                  <button
                    style={{
                      pointerEvents: registerButtonActive.button.active,
                      opacity: registerButtonActive.button.opacity
                    }}
                    className='creative-register-button'>
                    Register
                  </button>

                  <div className='error-message'>{errorValue}</div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer userName={user.name} avatarImage={user.avatar} token={token} />
        {loading ? <Spinner /> : renderRedirect()}
      </div>
    </Fragment>
  );
};

export default RegisterCreative;
