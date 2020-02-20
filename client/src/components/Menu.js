import React, { Fragment } from 'react';
import MenuLink from './MenuLink';
import {
  homeLink,
  aboutLink,
  showcaseLink,
  searchLink,
  loginLink,
  userProfileLink,
  worksLink
} from '../scripts/menuLinksConstructor';
import '../css/menu.css';

const linksArray = [
  homeLink,
  aboutLink,
  showcaseLink,
  searchLink,
  loginLink,
  userProfileLink,
  worksLink
];

let menuDisplayed = false;

// const useOutsideAlerter = ref => {
//   const handleClickOutside = event => {
//     if (ref.current && !ref.current.contains(event.target)) {
//       let menu = document.getElementsByClassName('menu')[0];
//       let menubars = document.querySelectorAll('.menubars');

//       // close menu
//       if (menuDisplayed === true) {
//         menu.className = 'menu menu-fade-out';
//         menubars.forEach((el, index) => {
//           el.className = `menubars menubar-${index + 1} menubar-${index +
//             1}-close-menu`;
//         });
//         menuDisplayed = !menuDisplayed;
//       }
//     }
//   };
//   useEffect(() => {
//     // Bind the event listener
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   });
// };
// const OutsideAlerter = props => {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   return <div ref={wrapperRef}>{props.children}</div>;
// };
// OutsideAlerter.propTypes = {
//   children: PropTypes.element.isRequired
// };

const Menu = props => {
  const menuFadeIn = () => {
    let menu = document.getElementsByClassName('menu')[0];
    let menubars = document.querySelectorAll('.menubars');
    let button = document.getElementsByClassName('menu-button')[0];
    button.removeAttribute('onlick');

    // open menu
    if (menuDisplayed === false) {
      menu.className = 'menu menu-fade-in';
      menubars.forEach((el, index) => {
        el.className = `menubars menubar-${index + 1} menubar-${index +
          1}-open-menu`;
      });
      console.log('open');
      menuDisplayed = !menuDisplayed;
    } else {
      menu.className = 'menu menu-fade-out';
      menubars.forEach((el, index) => {
        el.className = `menubars menubar-${index + 1} menubar-${index +
          1}-close-menu`;
      });
      console.log('open');
      menuDisplayed = !menuDisplayed;
    }
  };
  return (
    <Fragment>
      <div className='menu-container'>
        <div className='burger-menu-container'>
          <button className='menu-button' onClick={menuFadeIn}>
            <div className='menubars menubar-1'></div>
            <div className='menubars menubar-2'></div>
            <div className='menubars menubar-3'></div>
          </button>
        </div>
        <ul className='menu'>
          {linksArray.map((link, index) => {
            return (
              <MenuLink
                key={index}
                linkTo={link.linkTo}
                linkText={link.linkText}
                iconPath={link.iconPath}
                userName={props.userName}
                avatarImage={props.avatarImage}
                token={props.token}
              />
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default Menu;
