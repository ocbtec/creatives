import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spinner } from '../components/Spinner';
import '../css/contact.css';

const Contact = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // //De-structure form Data
  const { name, email, message } = formData;

  //OnChange event Listener for all input fields and buttons
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //OnSubmit event handler
  const onSubmit = async e => {
    e.preventDefault();

    setLoading(true);

    //Create user object
    const newMessage = {
      name,
      email,
      message
    };

    //Post to backend
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(newMessage);
      const res = await axios.post(
        'https://creatives-api.herokuapp.com/api/sendmail',

        body,
        config
      );

      setResponseMessage(res.data.message);
      formData.name = '';
      formData.email = '';
      formData.message = '';
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handleEmailSent = () => {
    return <p>{responseMessage}</p>;
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
                    value={name}
                    maxLength='18'
                    onChange={e => onChange(e)}
                    required
                  />
                  <input
                    id='email'
                    className='input-text'
                    type='email'
                    placeholder='* Email'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    required
                  />
                  <div className='required-label'>* required</div>
                </div>
                <button className='contact-button'>Send</button>
                <button
                  className='contact-button'
                  onClick={() => props.history.go(-1)}>
                  Go Back
                </button>
              </div>

              <textarea
                id='message'
                rows='5'
                cols='60'
                placeholder=' * Please enter your message'
                name='message'
                value={message}
                onChange={e => onChange(e)}
                required></textarea>
            </form>
            {loading ? <Spinner name='register-spinner' /> : handleEmailSent()}
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
