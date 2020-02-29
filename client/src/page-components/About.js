import React, { Fragment } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/about.css';

const About = props => {
  return (
    <Fragment>
      <div className='about-main-container'>
        <Header
          userName={props.location.state.userName}
          avatarImage={props.location.state.avatarImage}
          token={props.location.state.token}
          creative={props.location.state.creative}
          categories={props.location.state.categories}
        />
        <div className='about-body'>
          <div className='about-flex-1'>
            <div className='about-header-1-container'>
              <h1 className='about-header-1'>About</h1>
              <div className='about-icon'></div>
            </div>
            <h2 className='about-header-2'>Hi and welcome to Creatives</h2>
            <p className='about-paragraph'>
              We designed this site with the idea of creating a platform for
              creative folk to show their works.
            </p>
            <p className='about-paragraph'>
              A creative person is anybody that has a talent for creating.
              Whether it be an artist, photographer, musician or a web
              developer.
            </p>
            <p className='about-paragraph'>
              The site allows a creative to register and give us details they
              would want to share. Such as social media links, email, and of
              course upload examples of their work. All these details are
              searchable by other creatives as well as normal users.
            </p>
            <p className='about-paragraph'>
              Normal users are people who want to either contact a creative for
              a particular purchase or contract them to create a specific work.
              Such as a mural or a water feature in their garden.
            </p>
            <p className='about-paragraph'>
              The site allows the user/creative to communicate with each other
              via email and or via direct messaging on the site.
            </p>
            <p className='about-paragraph'>
              As creators of the site we do not get involved with any financial
              transactions between the users.
            </p>
          </div>
          <div className='about-flex-2'></div>
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

export default About;
