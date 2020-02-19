import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import LogoAnimation from '../components/LogoAnimation';
import '../css/landingPage.css';

let userName, avatarImage, token;

const LandingPage = props => {
  if (props.location.state !== undefined) {
    userName = props.location.state.userName;
    avatarImage = props.location.state.avatarImage;
    token = props.location.state.token;
  } else {
    userName = props.userName;
    avatarImage = props.avatarImage;
    token = props.token;
  }

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const res = await axios.get(
      'https://creatives-api.herokuapp.com/api/getAllCategories'
    );
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Fragment>
      <div className='landing-page-container'>
        <LogoAnimation
          userName={userName}
          avatarImage={avatarImage}
          token={token}
          categories={categories}
        />
      </div>
    </Fragment>
  );
};

export default LandingPage;
