import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Spinner } from '../components/Spinner';

import '../css/search.css';

const Search = props => {
  //States
  const [formData, setFormData] = useState({
    type: 'creations',
    city: '',
    text: '',
    category: '',
    tags: []
  });

  const [searchResults, setSearchResults] = useState({});
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [checked, setChecked] = useState(false);
  const [categoryTags, setCategoryTags] = useState([]);

  let categoriesProps;
  props.location.state.categories !== undefined
    ? (categoriesProps = props.location.state.categories)
    : (categoriesProps = props.categories);

  useEffect(() => {
    categoriesProps.forEach(category => {
      if (category.categoryName === formData.category) {
        setCategoryTags(category.categoryTags);
      }
    });
  }, [categoriesProps, formData.category, checked]);

  //De-structure form Data
  const { type, city, text, category, tags } = formData;
  //OnChange event Listener for all input fields and buttons
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const typeToggleClick = e => {
    e.preventDefault();
    setFormData({ ...formData, type: e.currentTarget.name });
  };

  document.addEventListener('keypress', e => {
    e.keyCode === 13 && e.preventDefault();
  });

  const radioCategoryClick = (e, index) => {
    setFormData({ ...formData, category: e.target.name });
    setChecked(index);
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
      type,
      category,
      city,
      text,
      tags
    };

    //Post to backend
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(search);
      console.log(body);
      const res = await axios.post(
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
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={categoriesProps}
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
              <button
                className='search-creatives-toggle'
                name='creatives'
                value='creatives'
                onClick={e => typeToggleClick(e)}>
                <img
                  className='search-creatives-toggle-image'
                  src='/images/yawn-icon.png'
                  alt='Creatives icon'
                />
              </button>

              <button
                className='search-creations-toggle'
                name='creations'
                value='creations'
                onClick={e => typeToggleClick(e)}>
                <img
                  className='search-creations-toggle-image'
                  src='/images/user-icon.png'
                  alt='Creations icon'
                />
              </button>

              {categoriesProps.map((category, index) => {
                return (
                  <label key={index} htmlFor={category.categoryName}>
                    <input
                      key={index}
                      type='radio'
                      checked={checked === index ? true : false}
                      id={category.categoryName}
                      name={category.categoryName}
                      value={category.categoryName}
                      onChange={e => radioCategoryClick(e, index)}
                    />
                    {category.categoryName}
                  </label>
                );
              })}

              <p>{categoryTags}</p>
              <input
                className='search-text-input'
                type='text'
                placeholder='Creative / Creation'
                name='text'
                value={text}
                onChange={e => onChange(e)}
              />

              <input
                className='search-city-input'
                type='text'
                placeholder='City'
                name='city'
                value={city}
                onChange={e => onChange(e)}
              />

              <div className='error-message'>{errorValue}</div>
              <button className='register-button'>Search</button>
            </form>
          </div>
          <div className='login-image-container'></div>
        </div>
        <Footer
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={categoriesProps}
        />
        {loading ? <Spinner /> : renderRedirect()}
      </div>
    </Fragment>
  );
};

export default Search;
