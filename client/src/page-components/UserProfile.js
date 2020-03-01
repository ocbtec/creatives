import React, { Fragment, useState, useEffect, useCallback } from 'react';
//import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import { Spinner } from '../components/Spinner';

import '../css/registerUser.css';

const UserProfile = props => {
  const [userDetails, setUserDetails] = useState({});

  //const [loading, setLoading] = useState(false);

  //UseCallback is used to prevent the useEffect missing dependency warning.
  const getUserDetails = useCallback(async () => {
    // setLoading(true);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': props.location.state.token
      }
    };

    //Get logged in user details
    const res = await axios.get(
      'https://creatives-api.herokuapp.com/api/getUserDetails',
      config
    );
    setUserDetails(res.data);
    //setLoading(false);
  }, [props.location.state.token]);

  //Only do this once
  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  //UseCallback is used to prevent the useEffect missing dependency warning.
  const loadUserForm = useCallback(async () => {
    setFormData(userDetails);
  }, [userDetails]);

  useEffect(() => {
    loadUserForm();
  }, [loadUserForm]);

  //Deconstruct user details object
  const {
    name,
    email,
    password,
    emailVisible,
    emailNotificationAllowed,
    subscribeToNewsletter,
    avatar,
    creative
  } = userDetails;

  const [formData, setFormData] = useState({
    name,
    email,
    password,
    emailVisible,
    emailNotificationAllowed,
    subscribeToNewsletter,
    avatar
  });

  //Once data is back populate all fields

  //After this all checks remain the same

  //Have to think of where we redirect as user may have updated important details.

  //   const [user, setUser] = useState({});
  //   const [image, setImage] = useState('');
  //   const [errors, setErrors] = useState([]);
  //   const [redirect, setRedirect] = useState(false);
  //   const [loadingAvatar, setLoadingAvatar] = useState(false);
  //   const [loadingProfile, setLoadingProfile] = useState(false);
  //   const [registerButtonActive, setRegisterButtonActive] = useState({
  //     button: {
  //       active: '',
  //       opacity: 1,
  //       userName: 'upload avatar',
  //       avatarPath: ''
  //     }
  //   });

  //   //De-structure form Data
  //   const {
  //     name,
  //     email,
  //     password,
  //     emailVisible,
  //     emailNotificationAllowed,
  //     subscribeToNewsletter,
  //     avatar
  //   } = formData;

  //   document.addEventListener('keypress', e => {
  //     e.keyCode === 13 && e.preventDefault();
  //   });

  //   //OnChange event Listener for all input fields and buttons
  //   const onChange = e => {
  //     e.target.files && uploadToCloudinary(e);
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //   };

  //   const checkboxClick = e => {
  //     setFormData({ ...formData, [e.target.name]: e.target.checked });
  //   };

  //   //Cloudinary
  //   const uploadToCloudinary = async x => {
  //     setRegisterButtonActive({
  //       ...registerButtonActive,
  //       button: {
  //         active: 'none',
  //         opacity: 0.3,
  //         userName: 'upload avatar',
  //         avatarPath: ''
  //       }
  //     });

  //     setLoadingAvatar(true);
  //     const files = x.target.files;
  //     const data = new FormData();
  //     data.append('file', files[0]);
  //     data.append('upload_preset', 'creatives');
  //     const cloudinaryRes = await fetch(
  //       'https://api.cloudinary.com/v1_1/creatives-upload/image/upload',
  //       {
  //         method: 'POST',
  //         body: data
  //       }
  //     );
  //     const file = await cloudinaryRes.json();
  //     setImage(file.secure_url);
  //     setLoadingAvatar(false);

  //     if (file) {
  //       setRegisterButtonActive({
  //         ...registerButtonActive,
  //         button: {
  //           active: 'all',
  //           opacity: 1,
  //           userName: document.getElementById('userName').value,
  //           avatarPath: file.secure_url
  //         }
  //       });
  //     }
  //   };

  //   //Redirect handler
  //   const handleRedirect = () => {
  //     setRedirect(true);
  //   };

  //   //Redirect function
  //   const renderRedirect = () => {
  //     if (redirect) {
  //       return (
  //         <Redirect
  //           to={{
  //             pathname: '/showcase',
  //             state: {
  //               userName: user.name,
  //               avatarImage: user.avatar,
  //               token: props.location.state.token,
  //               creative: user.creative,
  //               categories: props.location.state.categories
  //             }
  //           }}
  //         />
  //       );
  //     }
  //   };

  //   //OnSubmit event handler
  //   const onSubmit = async e => {
  //     e.preventDefault();
  //     setLoadingProfile(true);

  //     //Create user object
  //     const newUser = {
  //       name,
  //       email,
  //       password,
  //       emailVisible,
  //       emailNotificationAllowed,
  //       subscribeToNewsletter,
  //       avatar: image
  //     };

  //     //Post to backend
  //     try {
  //       const config = {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'x-auth-token': props.location.state.token
  //         }
  //       };
  //       const body = JSON.stringify(newUser);
  //       const res = await axios.put(
  //         'https://creatives-api.herokuapp.com/api/userUpdate',

  //         body,
  //         config
  //       );

  //       setUser(res.data.user);
  //       setLoadingProfile(false);
  //       handleRedirect();
  //     } catch (err) {
  //       setErrors(err.response.data.errors);
  //       setLoadingProfile(false);
  //     }
  //   };

  //   //Get all errors if any
  //   const listErrors = errors.map(error => error.msg);
  //   let errorValue;
  //   listErrors.length > 0 && (errorValue = listErrors);

  return (
    <Fragment>
      <div className='register-user-main-container'>
        <Header
          userName={name}
          avatarImage={avatar}
          token={props.location.state.token}
          creative={creative}
          categories={props.location.state.categories}
        />
        <div className='register-user-body'>
          <div className='register-user-image-container'>
            <div className='image-container-2'></div>
            <div className='image-lightning-1'></div>
            <div className='image-lightning-2'></div>
            <div className='image-lightning-3'></div>
          </div>
          <div className='register-user-container'>
            <div className='headline'>
              <img
                className='register-icon'
                src={require('../images/register-user-icon.svg')}
                alt='Register-Icon'
              />
              <h1>Edit User Profile </h1>
            </div>
            <div className='headline-2'>Please fill in all fields</div>
            {/* onSubmit={e => onSubmit(e)} */}
            <form className='user-form-container'>
              <input
                id='userName'
                className='input-text'
                type='text'
                name='name'
                value={name}
                maxLength='18'
                //onChange={e => onChange(e)}
                required
              />
              <input
                className='input-text'
                type='email'
                name='email'
                value={email}
                //onChange={e => onChange(e)}
                required
              />

              <input
                className='input-text'
                type='password'
                name='password'
                value={password}
                //onChange={e => onChange(e)}
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
                    name='emailVisible'
                    //onClick={e => checkboxClick(e)}
                    defaultChecked={emailVisible}
                  />
                  <p className='checkbox-label'>display email publicly</p>
                </div>
                <div className='checkbox-container-inner' id='align-items-top'>
                  <input
                    className='input-checkbox'
                    type='checkbox'
                    name='emailNotificationAllowed'
                    //onClick={e => checkboxClick(e)}
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
                    name='subscribeToNewsletter'
                    //onClick={e => checkboxClick(e)}
                    defaultChecked={subscribeToNewsletter}
                  />
                  <p className='checkbox-label'>subscribe to newsletter</p>
                </div>
                <div className='line'></div>
                <div className='avatar-container'>
                  <div className='avatar-container-left'>
                    <div className='upload-avatar'>
                      {/* {registerButtonActive.button.avatarPath === '' ? (
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
                      <span>{registerButtonActive.button.userName}</span> */}
                    </div>
                    {/* <input
                      className='choose-file'
                      type='file'
                      placeholder='Upload an avatar'
                      name='avatar'
                      value={avatar}
                      //onChange={e => onChange(e)}
                    /> */}
                  </div>
                  {/* {loadingAvatar ? <Spinner name='avatar-spinner' /> : null} */}
                </div>

                <div className='line'></div>
                {/* <button
                  style={{
                    pointerEvents: registerButtonActive.button.active,
                    opacity: registerButtonActive.button.opacity
                  }}
                  className='user-register-button'>
                  Submit Changes
                </button> */}
              </div>
              {/* <div className='register-user-error-message'>{errorValue}</div>  */}
            </form>
          </div>
        </div>
        <Footer
          userName={name}
          avatarImage={avatar}
          token={props.location.state.token}
          categories={props.location.state.categories}
        />
        {/* {loadingProfile ? (
          <Spinner name='register-spinner' />
        ) : (
          renderRedirect()
        )} */}
      </div>
    </Fragment>
  );
};

export default UserProfile;
