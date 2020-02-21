import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkItem from '../components/WorkItem';
import axios from 'axios';
import '../css/showcase.css';

const Showcase = props => {
  const [showcase, setShowcase] = useState([]);

  const getShowcase = async () => {
    const res = await axios.get(
      'https://creatives-api.herokuapp.com/api/showcase'
    );
    setShowcase(res.data);
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
                  />
                );
              });
            })}

            {/* workItemTitle={workItem} */}
            {/* workItemImage={workItemImage[index]} */}
            {/* workItemCategory={workItemCategory[index]} */}
            {/* workItemCreator={workItemCreator[index]} */}
          </div>
        </div>
        <Footer
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
        />
      </div>
    </Fragment>
  );
};

export default Showcase;
