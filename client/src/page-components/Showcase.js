import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkItem from '../components/WorkItem';
import '../css/showcase.css';

const Showcase = props => {
  const workItemTitle = [
    'Dirty WC',
    'Free banana',
    'Go home',
    'First thought',
    'lazy Greeks',
    'Blockchain',
    'Paparaki',
    'Kartoffelsalat',
    'Cooky',
    'Laptop sucks',
    'WTF?',
    'THE END'
  ];
  const workItemImage = [
    './images/register-user-img-3-export.jpg',
    './images/circle.jpg',
    './images/finalProjectIcon.png',
    './images/waves.jpg',
    './images/register-user-img-3-export.jpg',
    './images/waves.jpg',
    './images/register-user-img-3-export.jpg',
    './images/waves.jpg',
    './images/register-user-img-3-export.jpg',
    './images/waves.jpg',
    './images/register-user-img-3-export.jpg',
    './images/waves.jpg'
  ];
  const workItemCategory = [
    'Musician',
    'Web Developer',
    'Artist',
    'Writer',
    'Gardener',
    'Photographer',
    'Musician',
    'Web Developer',
    'Artist',
    'Writer',
    'Gardener',
    'Photographer'
  ];
  const workItemCreator = [
    'Kalle',
    'Horst',
    'Kalle',
    'Horst',
    'Kalle',
    'Horst',
    'Kalle',
    'Horst',
    'Kalle',
    'Horst',
    'Kalle',
    'Horst'
  ];
  const workIconGeneral = './images/works-icon-dark.png';

  return (
    <Fragment>
      <div className='showcase-main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
        />
        {/* <div className='showcase-body'>
          <div className='showcase-headline-container'>
            <h1 className='headline-showcase'>Showcase</h1>
            <div className='work-examples'>Work examples</div>
          </div>
          <div className='showcase-works-container'>
            {workItemTitle.map((workItem, index) => {
              return (
                <WorkItem
                  workItemTitle={workItem}
                  workItemImage={workItemImage[index]}
                  workItemCategory={workItemCategory[index]}
                  workItemCreator={workItemCreator[index]}
                  workIconGeneral={workIconGeneral}
                />
              );
            })}
          </div>
        </div> */}
        {/* <Footer userName={userName} avatarImage={avatarImage} token={token} /> */}
      </div>
    </Fragment>
  );
};

export default Showcase;
