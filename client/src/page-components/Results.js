import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkItem from '../components/WorkItem';
import { Spinner } from '../components/Spinner';
import '../css/results.css';

const Results = props => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const getResults = useCallback(() => {
    setLoading(true);
    setResults(props.location.state.searchResults);
    setLoading(false);
  }, [props.location.state.searchResults]);

  useEffect(() => {
    getResults();
  }, [getResults]);

  return (
    <Fragment>
      <div className='results-main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />
        <div className='results-body'>
          <div className='results-headline-container'>
            <h1 className='headline-results'>Results</h1>
          </div>
          <div className='results-works-container'>
            {results.map(creative => {
              return creative.works.map((work, index) => {
                return (
                  <WorkItem
                    key={index}
                    creativeName={creative.name}
                    creativeAvatar={creative.avatar}
                    fileTitle={work.fileTitle}
                    fileCategory={work.fileCategory}
                    tags={work.tags}
                    filePath={work.filePath}
                    workId={work._id}
                  />
                );
              });
            })}
          </div>

          <div className='results-button-container'>
            <button
              className='results-back-button'
              id='results-back-button'
              onClick={() =>
                props.history.push({
                  pathname: '/search',
                  state: {
                    userName: props.location.state.userName,
                    avatarImage: props.location.state.avatarImage,
                    token: props.location.state.token,
                    creative: props.location.state.creative,
                    categories: props.location.state.categories
                  }
                })
              }>
              Back
            </button>
          </div>

          {loading && <Spinner name='results-spinner' />}
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
