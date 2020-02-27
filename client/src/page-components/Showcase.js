import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkItem from '../components/WorkItem';
import axios from 'axios';
import { Spinner } from '../components/Spinner';
import '../css/showcase.css';

const Showcase = props => {
  const [showcase, setShowcase] = useState([]);
  const [loading, setLoading] = useState(false);

  const getShowcase = async () => {
    setLoading(true);
    const res = await axios.get(
      'https://creatives-api.herokuapp.com/api/showcase'
    );
    setShowcase(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getShowcase();
  }, []);

  return (
    <Fragment>
      <div className='showcase-main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />
        <div className='showcase-body'>
          <div className='showcase-headline-container'>
            <h1 className='headline-showcase'>Showcase</h1>
            <div className='work-examples'>Work examples</div>
          </div>
          <div className='showcase-works-container'>
            {showcase.map(creative => {
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
          {loading && <Spinner name='showcase-spinner' />}
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

export default Showcase;
