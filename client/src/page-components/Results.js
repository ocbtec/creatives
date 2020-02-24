import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/about.css';

const Results = props => {
  console.log(props.location.state.searchResults);
  return (
    <Fragment>
      <div className='main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />
        <div className='about-body'>
          <h1>Results</h1>
          <p>Check the console for results array</p>
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

export default Results;
