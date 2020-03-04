import React, { Fragment, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/notFound404.css';

const NotFound404 = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let categoriesProps;
  props.location.state !== undefined
    ? (categoriesProps = props.location.state.categories)
    : (categoriesProps = props.categories);

  const backClick = () => {
    props.history.go(-1);
  };

  return (
    <Fragment>
      <div className='not-found-main-container'>
        <Header displayMenu={false} />
        <div className='not-found-body'>
          <div className='not-found-left-side-image-container'></div>
          <div className='not-found-right-side'>
            <div className='not-found-right-side-flex'>
              <h1 className='not-found-headline'>404</h1>
              <div>
                <div className='not-found-item'>
                  Hm, the page you were looking for doesn't seem to exist
                  anymore.
                </div>
                <div className='not-found-item'>
                  Or we just didn’t have enough time to program it ¯\_(ツ)_/¯
                </div>
              </div>

              <button id='not-found-back-button' onClick={backClick}>
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
