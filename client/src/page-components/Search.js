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
  const [clickFlag, setClickFlag] = useState(false);

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

  let creationsSelected = 'select';
  let creativesSelected = 'deselect';

  const typeToggleClick = e => {
    e.preventDefault();
    setFormData({ ...formData, type: e.currentTarget.name });

    console.log(e.target);
    console.log(e.currentTarget.name);

    if (e.target.name === 'creatives') {
      e.target.src = `/images/${e.target.name}-icon-select.png`;
      document.querySelector(
        `.search-creations-toggle-image`
      ).src = `/images/creations-icon-deselect.png`;
      setClickFlag(true);
    }
    if (e.target.name === 'creations') {
      e.target.src = `/images/${e.target.name}-icon-select.png`;
      document.querySelector(
        `.search-creatives-toggle-image`
      ).src = `/images/creatives-icon-deselect.png`;
      setClickFlag(false);
    }
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
              searchResults: searchResults,
              userName: props.location.state.userName,
              avatarImage: props.location.state.avatarImage,
              token: props.location.state.token,
              creative: props.location.state.creative,
              categories: categoriesProps
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
      <div className='search-main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={categoriesProps}
        />
        <div className='search-body'>
          <div className='search-headline-container'>
            <h1 className='search-headline'>Search</h1>
            <div className='search-headline-2'>
              Look up Creatives or Creations
            </div>
          </div>
          <div className='search-container'>
            <form
              className='search-container-flex-1 search-form-container'
              onSubmit={e => onSubmit(e)}>
              <div className='search-select-label'>Select</div>
              <div className='search-select-main-buttons'>
                <img
                  className='search-creatives-toggle-image'
                  src={`/images/creatives-icon-${creativesSelected}.png`}
                  alt='Creatives icon'
                  name='creatives'
                  onClick={e => typeToggleClick(e)}
                />
                <img
                  className='search-creations-toggle-image'
                  src={`/images/creations-icon-${creationsSelected}.png`}
                  alt='Creations icon'
                  name='creations'
                  onClick={e => typeToggleClick(e)}
                />
              </div>

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
              <button className='search-button'>Search</button>
            </form>
            <div className='search-container-flex-2'>
              <h2>Categories</h2>
              <div className='search-category-buttons'>
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
              </div>
            </div>
            <div className='search-container-flex-3'>
              <h2>Tags</h2>
            </div>
          </div>
        </div>
        <Footer
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={categoriesProps}
        />
        {loading ? <Spinner name='register-spinner' /> : renderRedirect()}
      </div>
    </Fragment>
  );
};

export default Search;
