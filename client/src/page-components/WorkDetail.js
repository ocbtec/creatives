import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

import '../css/workDetail.css';

const WorkDetail = props => {
  const [workDetail, setWorkDetail] = useState([]);

  let tags = [];
  let tag;
  let user, fileCategory, fileTitle, fileDescription, creationDate, filePath;

  //UseCallback is used to prevent the useEffect missing dependency warning.
  const getWorkDetail = useCallback(async () => {
    const res = await axios.get(
      `https://creatives-api.herokuapp.com/api/getWork/${props.location.state.workId}`
    );
    setWorkDetail(res.data);
  }, [props.location.state.workId]);

  useEffect(() => {
    getWorkDetail();
  }, [getWorkDetail]);

  workDetail.map(work => {
    tags = work.tags;
    user = work.user;
    fileCategory = work.fileCategory;
    fileTitle = work.fileTitle;
    fileDescription = work.fileDescription;
    creationDate = work.creationDate;
    filePath = work.filePath;
    return null;
  });
  tag = tags.map(tag => <p key={tag}>{tag}</p>);

  // let date = creationDate.substring;
  console.log(workDetail);

  return (
    <Fragment>
      <div className='work-detail-main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />

        <div className='work-detail-body'>
          <div className='work-detail-flex-left'>
            <img
              className='work-detail-image-img'
              src={filePath}
              alt={fileTitle}
            />
            <div className='work-detail-tag-container'>
              {tag.map((tag, index) => {
                return (
                  <div key={index} className='work-detail-tag'>
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='work-detail-flex-right'>
            <h1 className='work-detail-creative-name'>
              {props.location.state.creativeName}
            </h1>
            <h2 className='work-detail-title'>{fileTitle}</h2>

            <p>{creationDate}</p>

            {/* <p>{fileCategory}</p> */}

            {/* <p>{fileDescription}</p> */}

            {/* creative image */}

            {/* <img
              src={props.location.state.creativeAvatar}
              alt={props.location.state.creativeName}
            /> */}
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

export default WorkDetail;
