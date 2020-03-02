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
