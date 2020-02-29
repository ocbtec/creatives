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
    type: 'creatives',
    city: '',
    text: '',
    category: '',
    tags: [],
    selectedTags: []
  });

  const [searchResults, setSearchResults] = useState({});
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [checked, setChecked] = useState(false);
  const [categoryTags, setCategoryTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
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

  let creativesSelected = 'select';
  let creationsSelected = 'deselect';

  const typeToggleClick = e => {
    e.preventDefault();
    setFormData({ ...formData, type: e.currentTarget.name });

    if (e.target.name === 'creatives') {
      e.target.src = `/images/${e.target.name}-icon-select.png`;
      document.querySelector(
        `.search-creations-toggle-image`
      ).src = `/images/creations-icon-deselect.png`;
      document.querySelector(`.creativ-icon-container`).style =
        'border-radius: 50%; background-color: #0ad82e; box-shadow: 0px 0px 30px 20px #0ad82e;';
      document.querySelector(`.creation-icon-container`).style =
        'border-radius: 50%; background-color: #ffffff00; box-shadow: 0px 0px 0px 0px #ffffff00;';
      setClickFlag(true);
    }
    if (e.target.name === 'creations') {
      e.target.src = `/images/${e.target.name}-icon-select.png`;
      document.querySelector(
        `.search-creatives-toggle-image`
      ).src = `/images/creatives-icon-deselect.png`;
      document.querySelector(`.creation-icon-container`).style =
        'border-radius: 50%; background-color: #0ad82e; box-shadow: 0px 0px 30px 20px #0ad82e;';
      document.querySelector(`.creativ-icon-container`).style =
        'border-radius: 50%; background-color: #ffffff00; box-shadow: 0px 0px 0px 0px #ffffff00;';
      setClickFlag(false);
    }
  };

  document.addEventListener('keypress', e => {
    e.keyCode === 13 && e.preventDefault();
  });

  const radioCategoryClick = (e, index) => {
    setSelectedTags([]);
    console.log(formData.selectedTags);

    setFormData({ ...formData, category: e.target.name });
    setChecked(index);

    let categoryButtons = document.querySelectorAll('.search-category-button');

    let categoryCache = e.target.name;

    categoryButtons.forEach(category => {
      const setSelectedCategory = () => {
        category.className =
          'search-category-button search-category-button-deselect';
        category.firstChild.src = `/images/category-icon-${category.firstChild.id
          .toLowerCase()
          .replace(' ', '-')}-deselect.png`;
        category.lastChild.style = 'color: #616869';
      };
      const setDeselectedCategories = () => {
        e.target.className =
          'search-category-button search-category-button-select';
        e.target.firstChild.src = `/images/category-icon-${e.target.firstChild.id
          .toLowerCase()
          .replace(' ', '-')}-select.png`;
        e.target.lastChild.style = 'color: #fefefe';
      };
      // console.log(categoryCache);
      // console.log(category.name);

      if (categoryCache === category.name) {
        setDeselectedCategories();
        return;
      } else {
        setDeselectedCategories();
        setSelectedCategory();

        // formData.selectedTags = [''];
      }
    });
  };

  const tagSelect = e => {
    let categoryCheck = formData.tags.indexOf(e.target.id);
    // console.log(categoryCheck);
    // console.log(formData.tags);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(categoryTags);

    if (categoryCheck > -1) {
      // deselected
      formData.tags.splice(categoryCheck, 1);
      formData.selectedTags.splice(categoryCheck, 1);
      e.target.className = 'tag-deselect';
    } else {
      // selected
      formData.tags.push(e.target.id);
      formData.selectedTags.push(e.target.id);
      e.target.className = 'tag-select';

      console.log(formData.tags);
      console.log(formData.selectedTags);
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
            <h1 className='search-headline'>
              Search
              <div className='headline-color-overlay'></div>
            </h1>
            <h2 className='search-headline-2'>
              Look up Creatives or Creations
            </h2>
          </div>
          <div className='search-container'>
            <form
              className='search-container-flex-1'
              onSubmit={e => onSubmit(e)}>
              <h2 className='search-select-label'>Select</h2>
              <div className='search-select-main-buttons'>
                <div className='creativ-icon-container'>
                  <img
                    className='search-creatives-toggle-image'
                    src={`/images/creatives-icon-${creativesSelected}.png`}
                    alt='Creatives icon'
                    name='creatives'
                    onClick={e => typeToggleClick(e)}
                  />
                </div>
                <div className='creation-icon-container'>
                  <img
                    className='search-creations-toggle-image'
                    src={`/images/creations-icon-${creationsSelected}.png`}
                    alt='Creations icon'
                    name='creations'
                    onClick={e => typeToggleClick(e)}
                  />
                </div>
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
              <h2 className='search-h2'>Category</h2>
              <div className='search-optional-label'>optional</div>
              <div className='search-category-container'>
                {categoriesProps.map((category, index) => {
                  return (
                    <button
                      key={index}
                      htmlFor={category.categoryName}
                      className='search-category-button search-category-button-deselect'
                      name={category.categoryName}
                      onClick={e => radioCategoryClick(e, index)}>
                      <img
                        className='category-icon'
                        src={`/images/${category.categoryIconPath}-deselect.png`}
                        alt={category.categoryName}
                        id={category.categoryName}
                      />
                      <p className={category.categoryName + ' category-label'}>
                        {category.categoryName}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className='search-container-flex-3'>
              <h2 className='search-h2'>Tags</h2>
              <div className='search-optional-label'>optional</div>
              <div className='search-tags-container'>
                {categoryTags.map(tag => {
                  return (
                    <div
                      className='tag-deselect'
                      id={tag}
                      onClick={e => tagSelect(e)}>
                      {tag}
                    </div>
                  );
                })}
              </div>
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
