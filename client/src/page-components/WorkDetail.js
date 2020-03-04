import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

import '../css/workDetail.css';

const WorkDetail = props => {
  const [workDetail, setWorkDetail] = useState([]);

  let tags = [];
  let tag;
  let fileCategory, fileTitle, fileDescription, creationDate, filePath;

  //UseCallback is used to prevent the useEffect missing dependency warning.
  const getWorkDetail = useCallback(async () => {
    const res = await axios.get(
      `https://creatives-api.herokuapp.com/api/getWork/${props.location.state.workId}`
    );
    setWorkDetail(res.data);
  }, [props.location.state.workId]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getWorkDetail();
  }, [getWorkDetail]);

  workDetail.map(work => {
    tags = work.tags;
    fileCategory = work.fileCategory;
    fileTitle = work.fileTitle;
    fileDescription = work.fileDescription;
    creationDate = work.creationDate;
    filePath = work.filePath;
    return null;
  });
  tag = tags.map(tag => <p key={tag}>{tag}</p>);

  creationDate = workDetail.length !== 0 && creationDate.substr(0, 4);

  const imageFullViewOpen = () => {
    document.getElementsByClassName(
      'image-full-view-container'
    )[0].style.cssText = 'display: flex';
  };
  const imageFullViewClose = () => {
    document.getElementsByClassName(
      'image-full-view-container'
    )[0].style.cssText = 'display: none';
  };

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
              className='work-detail-image'
              src={filePath}
              alt={fileTitle}
              onClick={imageFullViewOpen}
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
            <div className='work-detail-name-container'>
              <img
                className='work-detail-avatar'
                src={props.location.state.creativeAvatar}
                alt={props.location.state.creativeName}
              />
              <h1 className='work-detail-creative-name'>
                {props.location.state.creativeName}
              </h1>
            </div>
            <h2 className='work-detail-title'>
              {fileTitle}, {creationDate}
            </h2>

            <div className='work-detail-creative-container'>
              <img
                className='work-detail-category-icon'
                src={`/images/category-icon-${fileCategory &&
                  fileCategory
                    .toLowerCase()
                    .replace(' ', '-')}-deselect.png`}></img>
              <p className='work-detail-category'>{fileCategory}</p>
            </div>

            {/* <p>{fileDescription}</p> */}
            <p className='work-item-description'>
              The protagonist, K., arrives in a village governed by a mysterious
              bureaucracy operating in a nearby castle. When seeking shelter at
              the town inn, he claims to be a land surveyor summoned by the
              castle authorities. He is quickly notified that his castle contact
              is an official named Klamm, who, in an introductory note, informs
              K. he will report to the Mayor.
            </p>
            <Link to='/message'>
              <button className='work-detail-button-contact'>Contact</button>
            </Link>
          </div>
        </div>

        <div className='work-detail-button-container'>
          <button
            className='work-detail-button-back'
            onClick={() => props.history.go(-1)}>
            Back
          </button>
        </div>

        <Footer
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />
      </div>
      <div className='image-full-view-container' onClick={imageFullViewClose}>
        <div className='image-full-view-wrapper'>
          <img
            className='work-detail-image-full-view'
            src={filePath}
            alt={fileTitle}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default WorkDetail;
