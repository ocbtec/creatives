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
          <h1>About</h1>
          <p>
            Hi. Welcome to Creatives. We designed this site with the idea of
            creating a platform for creative folk to show their works. A
            creative person is anybody that has a talent for creating. Whether
            it be an artist, photographer, musician or a web developer. The site
            allows a creative to register and give us details they would want to
            share. Such as social media links, email, and of course upload
            examples of their work. All these details are searchable by other
            creatives as well as normal users. Normal users are people who want
            to either contact a creative for a particular purchase or contract
            them to create a specific work. Such as a mural or a water feature
            in their garden. The site allows the user/creative to communicate
            with each other via email and or via direct messaging on the site.
            As creators of the site we do not get involved with any financial
            transactions between the users.
          </p>
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
