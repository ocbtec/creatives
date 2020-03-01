import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spinner } from '../components/Spinner';
import CategoryButton from '../components/CategoryButton';

import '../css/registerCreative.css';

const RegisterCreative = props => {
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
    deviantArt: '',
    flickr: '',
    soundcloud: '',
    instagram: '',
    behance: '',
    vimeo: '',
    services: false,
    category: []
  });

  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [loadingAvatar, setLoadingAvatar] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [registerButtonActive, setRegisterButtonActive] = useState({
    button: {
      active: '',
      opacity: 1,
      userName: 'upload avatar',
      avatarPath: ''
    }
  });

  document.addEventListener('keypress', e => {
    e.keyCode === 13 && e.preventDefault();
  });

  let categoryIndex;
  const handleCategoryClick = e => {
    e.preventDefault();

    props.location.state.categories.map((category, index) => {
      category.categoryName === e.target.name && (categoryIndex = index);
      return categoryIndex;
    });

    let categoryCheck = formData.category.indexOf(e.target.name);
    let categoryLabel = document.getElementsByClassName(e.target.name)[0];

    let categoryIconPath = e.target.firstChild.alt
      .toLowerCase()
      .replace(' ', '-');

    if (categoryCheck > -1) {
      // deselected
      formData.category.splice(categoryCheck, 1);
      e.target.className = 'category-button-deselect';
      categoryLabel.style = 'color: #616869; font-size: 10pt;';
      e.target.firstChild.src = `./images/category-icon-${categoryIconPath}-deselect.png`;
    } else {
      // selected
      formData.category.push(e.target.name);
      e.target.className = 'category-button-select';
      categoryLabel.style = 'color: #fefefe;font-size: 12pt;';
      e.target.firstChild.src = `./images/category-icon-${categoryIconPath}-select.png`;
    }
  };

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
    behance,
    deviantArt,
    vimeo,
    instagram,
    flickr,
    soundcloud,
    services,
    category
  } = formData;

  //OnChange event Listener for all input fields and buttons
  const onChange = e => {
    e.preventDefault();
    e.target.files && uploadToCloudinary(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkboxClick = e => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
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
    document.getElementsByClassName('social-media-input')[0].focus();
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

    setLoadingAvatar(true);
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
    setLoadingAvatar(false);

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
              creative: user.creative,
              categories: props.location.state.categories
            }
          }}
        />
      );
    }
  };

  //OnSubmit event handler
  const onSubmit = async e => {
    e.preventDefault();
    setLoadingRegister(true);

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
      behance,
      deviantArt,
      vimeo,
      instagram,
      flickr,
      soundcloud,
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
      setLoadingRegister(false);
      handleRedirect();
    } catch (err) {
      setErrors(err.response.data.errors);
      setLoadingRegister(false);
    }
  };

  //Get all errors if any
  const listErrors = errors.map(error => error.msg);
  let errorValue;
  listErrors.length > 0 && (errorValue = listErrors);

  return (
    <Fragment>
      <div className='register-creative-main-container'>
        <Header
          userName={user.name}
          avatarImage={user.avatar}
          token={token}
          creative={user.creative}
          categories={props.location.state.categories}
        />
        <div className='register-creative-body'>
          <div className='creative-image-container'>
            <div className='creative-image-container-2'></div>
            <div className='creative-image-lightning-1'></div>
            <div className='creative-image-lightning-2'></div>
            <div className='creative-image-lightning-3'></div>
          </div>
          <div className='creative-register-container'>
            <div className='creative-headline'>
              <img
                className='creative-register-icon'
                src={require('../images/register-user-icon.svg')}
                alt='Register-Icon'
              />
              <h1>Register as Creative</h1>
            </div>
            <form
              className='creative-form-container'
              onSubmit={e => onSubmit(e)}>
              <div className='creative-input-container'>
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
                  <div className='creative-checkbox-container-inner'>
                    <input
                      className='creative-input-checkbox'
                      type='checkbox'
                      placeholder='Make Email public'
                      name='emailVisible'
                      onClick={e => checkboxClick(e)}
                      defaultChecked={emailVisible}
                    />
                    <p className='checkbox-label'>display email publicly</p>
                  </div>
                  <div
                    className='creative-checkbox-container-inner'
                    id='align-items-top'>
                    <input
                      className='creative-input-checkbox'
                      type='checkbox'
                      placeholder='Allow Email Notifications'
                      name='emailNotificationAllowed'
                      onClick={e => checkboxClick(e)}
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
                  <div className='creative-checkbox-container-inner'>
                    <input
                      className='creative-input-checkbox'
                      type='checkbox'
                      placeholder='Subscribe to our Newsletter'
                      name='subscribeToNewsletter'
                      onClick={e => checkboxClick(e)}
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
                          name='deviantArt'
                          className='social-media-icon'
                          src={require('../images/social-icon-deviantart.png')}
                          alt='deviantArt'
                        />
                      </button>

                      <button
                        className='social-media-button'
                        onClick={e => handleSocialIcon(e)}>
                        <img
                          name='flickr'
                          className='social-media-icon'
                          src={require('../images/social-icon-flickr.svg')}
                          alt='flickr'
                        />
                      </button>

                      <button
                        className='social-media-button'
                        onClick={e => handleSocialIcon(e)}>
                        <img
                          name='soundcloud'
                          className='social-media-icon'
                          src={require('../images/social-icon-soundcloud.png')}
                          alt='soundcloud'
                        />
                      </button>

                      <button
                        className='social-media-button'
                        onClick={e => handleSocialIcon(e)}>
                        <img
                          name='instagram'
                          className='social-media-icon'
                          src={require('../images/social-icon-instagram.svg')}
                          alt='instagram'
                        />
                      </button>

                      <button
                        className='social-media-button'
                        onClick={e => handleSocialIcon(e)}>
                        <img
                          name='behance'
                          className='social-media-icon'
                          src={require('../images/social-icon-behance.png')}
                          alt='behance'
                        />
                      </button>

                      <button
                        className='social-media-button'
                        onClick={e => handleSocialIcon(e)}>
                        <img
                          name='vimeo'
                          className='social-media-icon'
                          src={require('../images/social-icon-vimeo.png')}
                          alt='vimeo'
                        />
                      </button>
                    </div>
                    <input
                      className='social-media-input'
                      type='text'
                      onChange={e => onChange(e)}></input>
                  </div>
                </div>
              </div>

              <div className='creative-categories-container'>
                <div className='select-categories-label'>
                  Select your categories
                </div>
                <div className='select-categories-label-2'>at least one</div>
                <div className='select-category-container'>
                  {props.location.state.categories.map(category => (
                    <CategoryButton
                      key={category._id}
                      categoryName={category.categoryName}
                      categoryIcon={`/images/${category.categoryIconPath}-deselect.png`}
                      handleCategoryClick={handleCategoryClick}
                    />
                  ))}
                </div>
                <div className='available-container' id='align-items-top'>
                  <input
                    className='input-checkbox'
                    type='checkbox'
                    name='services'
                    onClick={e => checkboxClick(e)}
                    defaultChecked={services}
                  />
                  <div>
                    <p className='checkbox-label-available'>
                      available for services
                    </p>
                    <p className='checkbox-label-2'>
                      available to create customized creations
                    </p>
                  </div>
                </div>
                <div className='creative-line-long'></div>
                <div className='creative-avatar-container'>
                  <div className='creative-avatar-container-left'>
                    <div className='creative-upload-avatar'>
                      {registerButtonActive.button.avatarPath === '' ? (
                        <img
                          className='creative-user-icon'
                          src={require('../images/user-icon-dark.png')}
                          alt='User icon'
                        />
                      ) : (
                        <img
                          className='creative-user-icon'
                          src={registerButtonActive.button.avatarPath}
                          alt='User icon'
                        />
                      )}
                      <span>{registerButtonActive.button.userName}</span>
                    </div>
                    <input
                      className='creative-choose-file'
                      type='file'
                      placeholder='Upload an avatar'
                      name='avatar'
                      value={avatar}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  {loadingAvatar ? <Spinner name='avatar-spinner' /> : null}
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

                <div className='creative-error-message'>{errorValue}</div>
              </div>
            </form>
          </div>
        </div>
        <Footer
          userName={user.name}
          avatarImage={user.avatar}
          token={token}
          creative={user.creative}
          categories={props.location.state.categories}
        />
        {loadingRegister ? (
          <Spinner name='register-spinner' />
        ) : (
          renderRedirect()
        )}
      </div>
    </Fragment>
  );
};

export default RegisterCreative;
