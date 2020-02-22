import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/notFound404.css';

const NotFound404 = props => {
  //states
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);

  //Get all errors if any
  const listErrors = errors.map(error => error.msg);
  let errorValue;
  listErrors.length > 0 && (errorValue = listErrors);

  return (
    <Fragment>
      <div className='main-container'>
        <Header
          userName={user.name}
          avatarImage={user.avatar}
          token={token}
          creative={user.creative}
          categories={props.categories}
        />
        <div className='not-found-body'>
          <div className='left-side-image-container'>
            {/* <img
              className='not-found-image'
              src='./images/404-cat.jpg'
              alt='logo'
            /> */}
          </div>
          <div className='right-side'>
            <div className='right-side-flex'>
              <h1 className='not-found-item'>404</h1>
              <div className='not-found-item'>
                Hm, the page you were looking for doesn't seem to exist anymore.
              </div>
              <div className='not-found-item'>
                Or we just didn’t have enough time to program it ¯\_(ツ)_/¯
              </div>

              <Link
                to={{
                  pathname: '/',
                  state: {
                    userName: props.userName,
                    avatarImage: props.avatarImage,
                    token: props.token,
                    categories: props.categories,
                    creative: props.creative
                  }
                }}>
                <button id='back-button' className=''>
                  <div>Back to Creatives</div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Footer userName={user.name} avatarImage={user.avatar} token={token} />
      </div>
    </Fragment>
  );
};

export default NotFound404;
