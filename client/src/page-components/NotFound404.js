import React, { Fragment } from 'react';
import Header2 from '../components/Header2';
import Footer from '../components/Footer';
import '../css/notFound404.css';

const NotFound404 = props => {
  let categoriesProps;
  props.location.state !== undefined
    ? (categoriesProps = props.location.state.categories)
    : (categoriesProps = props.categories);

  const backClick = () => {
    props.history.go(-1);
  };

  return (
    <Fragment>
      <div className='main-container'>
        <Header2 />
        <div className='not-found-body'>
          <div className='left-side-image-container'></div>
          <div className='right-side'>
            <div className='right-side-flex'>
              <h1 className='not-found-item'>404</h1>
              <div className='not-found-item'>
                Hm, the page you were looking for doesn't seem to exist anymore.
              </div>
              <div className='not-found-item'>
                Or we just didn’t have enough time to program it ¯\_(ツ)_/¯
              </div>

              <button id='back-button' onClick={backClick}>
                <div>Back to Creatives</div>
              </button>
            </div>
          </div>
        </div>
        <Footer
          userName={props.userName}
          avatarImage={props.avatarImage}
          token={props.token}
          categories={categoriesProps}
        />
      </div>
    </Fragment>
  );
};

export default NotFound404;
