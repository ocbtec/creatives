import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spinner } from '../components/Spinner';

import '../css/search.css';

const Search = props => {
  //States
  const [formData, setFormData] = useState({
    type: '',
    city: '',
    text: '',
    category: '',
    tags: []
  });

  const [searchResults, setSearchResults] = useState({});
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  //De-structure form Data
  const { type, city, text, category, tags } = formData;
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
            pathname: '/results',
            state: {
              searchResults: searchResults
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
    //Create search object
    const search = {
      type: '',
      city: '',
      text: '',
      category: '',
      tags: ''
    };

    //Post to backend
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(search);
      const res = await axios.get(
        'https://creatives-api.herokuapp.com/api/search',
        body,
        config
      );
      setSearchResults(res.data);
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
          userName={props.userName}
          avatarImage={props.avatarImage}
          token={props.token}
          creative={props.creative}
        />
        <div className='login-body'>
          <div className='login-container'>
            <h1 className='login-headline'>Welcome back to CREATIVES</h1>
            <img
              className='login-logo'
              src='./images/logo-inner-ball.png'
              alt='logo'
            />
            <div className='headline'>Please enter your search criteria</div>
            <form
              className='form-container flex-item'
              onSubmit={e => onSubmit(e)}>
              {/* <input
                className='login-input-text'
                type='email'
                placeholder='* Email'
                name='email'
                onChange={e => onChange(e)}
                required
              /> */}
              {/*  <input
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
             */}
              <div className='error-message'>{errorValue}</div>
              <button className='register-button'>Search</button>
            </form>
          </div>
          <div className='login-image-container'></div>
        </div>
        <Footer
          userName={props.userName}
          avatarImage={props.avatarImage}
          token={props.token}
        />
        {loading ? <Spinner /> : renderRedirect()}
      </div>
    </Fragment>
  );
};

export default Search;
