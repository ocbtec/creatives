import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { leo, franz, genghis } from '../scripts/aboutText';

import '../css/creativeDetail.css';

const CreativeDetail = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [creativeDetail, setCreativeDetail] = useState([]);
  const [aboutText, setAboutText] = useState('');

  const getAboutText = useCallback(() => {
    const about = [];
    about.push(leo, franz, genghis);

    setAboutText(
      about
        .map(x => x.name === props.location.state.creativeName && x.text)
        .filter(y => y !== false)
    );
  }, [props.location.state.creativeName]);

  useEffect(() => {
    getAboutText();
  }, [getAboutText]);

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
    <p className='creative-detail-category' key={icon}>
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

  //Create Mailto link
  const mailTo = `mailto:${email}`;

  return (
    <Fragment>
      <div className='creative-detail-main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />

        <div className='creative-detail-body'>
          <div className='creative-detail-flex-container'>
            <div className='creative-detail-flex-left'>
              <div className='creative-detail-name-container'>
                {props.location.state.creativeName && (
                  <h1 className='creative-detail-name'>
                    {props.location.state.creativeName}
                  </h1>
                )}
                <div className='creative-detail-name-ball-1'></div>
                <div className='creative-detail-name-line'></div>
                <div className='creative-detail-name-ball-2'></div>
              </div>

              <div className='creative-detail-city-service-container'>
                <div className='creative-detail-city-container'>
                  <img
                    className='creative-detail-city-icon'
                    src='/images/location-icon.svg'
                    alt='icon'
                  />
                  <p className='creative-detail-city'>{city}</p>
                </div>
                <div className='creative-detail-service-container'>
                  <div>Services</div>
                  <div className='creative-detail-service-box'>
                    {services ? (
                      <div style={{ color: '#bcbcbc' }}>&#9744;</div>
                    ) : (
                      <div>&#9745;</div>
                    )}
                  </div>
                </div>
              </div>

              <p className='creative-item-about'>{aboutText}</p>

              <div className='creative-detail-category-container'>
                {categoryIcons}
              </div>

              <div className='creative-detail-contact-container'>
                <h2>Feel free to contact me under</h2>

                <div className='creative-detail-email-container'>
                  <img
                    className='creative-detail-email-icon'
                    src='/images/envelope.svg'
                    alt='Email Icon'
                  />
                  {emailVisible && <a href={mailTo}>{email}</a>}
                  <p className='creative-detail-email'>
                    <a href={`http://${email}`}>{email}</a>
                  </p>
                </div>

                <div className='creative-detail-website-container'>
                  <img
                    className='creative-detail-website-icon'
                    src='/images/website-icon.png'
                    alt='website Icon'
                  />
                  <p className='creative-detail-website'>
                    <a href={`http://${website}`}>{website}</a>
                  </p>
                </div>

                {/* <div>{socialIcons}</div> */}
              </div>

              <h2 className='creative-detail-contact-headline'>
                Or write me a pm here
              </h2>

              <button className='creative-detail-button-contact'>
                <Link
                  className='creative-detail-button-contact-link'
                  to='/message'></Link>
                Contact
              </button>
            </div>
            <div className='creative-detail-flex-right'>
              {avatar && (
                <img
                  className='creative-detail-avatar'
                  src={avatar}
                  alt={props.location.state.creativeName}
                />
              )}
            </div>
          </div>
          <div className='creative-detail-button-container'>
            <button
              className='creative-detail-button-back'
              onClick={() => props.history.go(-1)}>
              Back
            </button>
          </div>
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
