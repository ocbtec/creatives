import React, { Fragment, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/contact.css';

const Contact = props => {
  const [errors, setErrors] = useState([]);

  const onSubmit = e => {
    return;
  };

  const onChange = e => {
    return;
  };

  return (
    <Fragment>
      <div className='contact-main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />
        <div className='contact-body'>
          <div className='contact-flex-1'>
            <div className='contact-header-1-container'>
              <h1 className='contact-header-1'>Contact</h1>
              <div className='contact-icon'></div>
            </div>
          </div>
          <div className='contact-flex-2'>
            <form className='form-flex-container' onSubmit={e => onSubmit(e)}>
              <div className='input-section'>
                <div className='input-fields'>
                  <input
                    id='name'
                    className='input-text'
                    type='text'
                    placeholder='* Name'
                    name='name'
                    // value={name}
                    maxLength='18'
                    onChange={e => onChange(e)}
                    required
                  />
                  <input
                    className='input-text'
                    type='email'
                    placeholder='* Email'
                    name='email'
                    // value={email}
                    onChange={e => onChange(e)}
                    required
                  />
                  <div className='required-label'>* required</div>
                </div>
                <button className='contact-button'>Send</button>
              </div>

              <textarea
                id='text-body'
                rows='5'
                cols='60'
                name='description'
                placeholder='...'></textarea>

              {/* <div className='checkbox-container-outer'>
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
                  {loadingAvatar ? <Spinner name='avatar-spinner' /> : null}
                </div>

                <div className='line'></div>
                <button
                  style={{
                    pointerEvents: registerButtonActive.button.active,
                    opacity: registerButtonActive.button.opacity
                  }}
                  className='user-register-button'>
                  Register
                </button>
              </div> */}
            </form>
          </div>
          <div className='contact-flex-3'></div>
        </div>
        <Footer
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />
      </div>
    </Fragment>
  );
};

export default Contact;
