import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

import '../css/creativeDetail.css';

const CreativeDetail = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [creativeDetail, setCreativeDetail] = useState([]);

  const getCreativeDetail = useCallback(async () => {
    const res = await axios.get(
      `https://creatives-api.herokuapp.com/api/getCreativebyName/${props.location.state.creativeName}`
    );
    setCreativeDetail(res.data);
  }, [props.location.state.creativeName]);

  useEffect(() => {
    getCreativeDetail();
  }, [getCreativeDetail]);

  //Convert data to an array
  const creatives = Object.values(creativeDetail);

  //Get social data
  const social = creatives[0];
  const socialSpread = { ...social };
  const socialFiltered = Object.entries(socialSpread).filter(x => x[1] !== '');
  const socialIcons = socialFiltered.map(icon => (
    <p id='social' key={icon}>
      {icon}
    </p>
  ));

  //Get categories
  const categories = creatives[1];
  const categoriesSpread = { ...categories };
  const categoriesFiltered = Object.entries(categoriesSpread).map(x => x);
  const categoryIcons = categoriesFiltered.map(icon => (
    <p id='categories' key={icon}>
      {icon[1]}
    </p>
  ));

  //Deconstruct creatives Object
  const {
    name,
    email,
    emailVisible,
    avatar,
    city,
    website,
    services
  } = creativeDetail;

  //Show string services
  let servicesString = '';
  services ? (servicesString = 'Yes') : (servicesString = 'No');

  //Create Mailto link
  const mailTo = `mailto:${email}`;

  return (
    <Fragment>
      <div className='workDetail-main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />

        <div className='workDetail-body'>
          <label htmlFor='social'>Social Icons</label>
          {socialIcons}
          <br />
          <br />
          <label htmlFor='categories'>Categories</label>
          {categoryIcons}
          <p>{name}</p>
          <br />
          {emailVisible && <a href={mailTo}>{email}</a>}

          <br />
          <img src={avatar} alt={name} />
          <br />
          <label htmlFor='city'>City</label>
          <p id='city'>{city}</p>
          <br />
          <label htmlFor='website'>Website</label>
          <p id='website'>{website}</p>
          <br />
          <label htmlFor='services'>Services</label>
          <p id='services'>{servicesString}</p>
          <br />
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

export default CreativeDetail;
