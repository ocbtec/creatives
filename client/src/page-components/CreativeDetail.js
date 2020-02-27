import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

import '../css/creativeDetail.css';

const CreativeDetail = props => {
  const [creativeDetail, setCreativeDetail] = useState([]);

  // let tags = [];
  // let tag;
  // let user, fileCategory, fileTitle, fileDescription, creationDate, filePath;

  useEffect(() => {
    getCreativeDetail();
  }, []);

  const getCreativeDetail = async () => {
    const res = await axios.get(
      `https://creatives-api.herokuapp.com/api/getCreativebyName/${props.location.state.creativeName}`
    );
    setCreativeDetail(res.data);
  };

  //Get social data
  const creatives = Object.values(creativeDetail);
  const x = creatives[0];
  const y = { ...x };

  const z = Object.entries(y).filter(zz => zz[1] !== '');

  console.log(z);
  console.log(creativeDetail);
  console.log(typeof x);
  console.log(typeof y);
  console.log(creatives);

  // workDetail.map(work => {
  //   tags = work.tags;
  //   user = work.user;
  //   fileCategory = work.fileCategory;
  //   fileTitle = work.fileTitle;
  //   fileDescription = work.fileDescription;
  //   creationDate = work.creationDate;
  //   filePath = work.filePath;
  // });
  // tag = tags.map(tag => <p key={tag}>{tag}</p>);

  return (
    <Fragment>
      <div className='workDetail-main-container'>
        <Header />
        <div className='workDetail-body'>
          {/*       <p>{props.location.state.creativeName}</p>
  //         <br />
  //         <img
  //           src={props.location.state.creativeAvatar}
  //           alt={props.location.state.creativeName}
  //         />
  //         <br />
  //         <p>{user}</p>
  //         <br />
  //         <p>{fileCategory}</p>
  //         <br />
  //         <p>{fileTitle}</p>
  //         <br />
  //         <p>{fileDescription}</p>
  //         <br />
  //         <p>{creationDate}</p>
  //         <br />
  //         <img src={filePath} alt={fileTitle} />
          // {tag}*/}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default CreativeDetail;
