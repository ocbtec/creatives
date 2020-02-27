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

  return (
    <Fragment>
      <div className='workDetail-main-container'>
        <Header />
        <div className='workDetail-body'>
          <p>{props.location.state.creativeName}</p>
          <br />
          <img
            src={props.location.state.creativeAvatar}
            alt={props.location.state.creativeName}
          />
          <br />
          <p>{user}</p>
          <br />
          <p>{fileCategory}</p>
          <br />
          <p>{fileTitle}</p>
          <br />
          <p>{fileDescription}</p>
          <br />
          <p>{creationDate}</p>
          <br />
          <img src={filePath} alt={fileTitle} />
          {tag}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default WorkDetail;
