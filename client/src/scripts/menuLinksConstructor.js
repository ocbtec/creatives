import React from 'react';

class MenuLink {
  constructor(linkTo, linkText, iconPath) {
    this.linkTo = linkTo;
    this.linkText = linkText;
    this.iconPath = iconPath;
  }
}

export const homeLink = new MenuLink(
  '/',
  'Home',
  (
    <img
      className='icon'
      src={require('../images/home-icon.svg')}
      alt='home-icon'
    />
  )
);

export const aboutLink = new MenuLink(
  '/about',
  'About',
  (
    <img
      className='icon'
      src={require('../images/about-icon.png')}
      alt='about-icon'
    />
  )
);

export const showcaseLink = new MenuLink(
  '/showcase',
  'Showcase',
  (
    <img
      className='icon'
      src={require('../images/showcase-icon.svg')}
      alt='showcase-icon'
    />
  )
);

export const searchLink = new MenuLink(
  '/search',
  'Search',
  (
    <img
      className='icon'
      src={require('../images/search-icon.png')}
      alt='search-icon'
    />
  )
);

export const contactLink = new MenuLink(
  '/contact',
  'Contact',
  (
    <img
      className='icon'
      src={'/images/contact-page-icon.png'}
      alt='contact-icon'
    />
  )
);

export const loginLink = new MenuLink(
  '/login',
  'Login',
  (
    <img
      className='icon'
      src={require('../images/login-icon.png')}
      alt='login-icon'
    />
  )
);

export const logoutLink = new MenuLink(
  '/logout',
  'Logout',
  (
    <img
      className='icon'
      src={require('../images/logout-icon.png')}
      alt='logout-icon'
    />
  )
);

export const userProfileLink = new MenuLink(
  '/userProfilex',
  'Profile',
  (
    <img
      className='icon'
      src={require('../images/user-icon.png')}
      alt='user-icon'
    />
  )
);

export const creativeProfileLink = new MenuLink(
  '/creativeProfilex',
  'Profile',
  (
    <img
      className='icon'
      src={require('../images/user-icon.png')}
      alt='user-icon'
    />
  )
);

export const worksLink = new MenuLink(
  '/worksx',
  'Works',
  (
    <img
      className='icon'
      src={require('../images/works-icon-bright.png')}
      alt='work-icon'
    />
  )
);
