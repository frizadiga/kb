import React from 'react';
import { FontAwesomeIcon as FAS } from '@fortawesome/react-fontawesome';
import Button from '../button';
// import { Link } from 'react-router-dom';
import './top-bar.scss';

// const menuList = [
//   {
//     path: '/',
//     text: 'Home',
//   },
//   {
//     path: '/menu',
//     text: 'Menu',
//   },
// ];

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="inner">
        <div className="logo-container">
          <Button to="/">
            <img src="/images/logo__ktbs__blue.svg" alt="kitabisa"/>
          </Button>
        </div>
        <div className="view-desktop">
          <div className="menu">
            {/* <Button
              style={{
                backgroundColor: 'white',
                color: '#333',
                minWidth: '15ch',
              }}
            >
              Some Button Action
            </Button> */}
          </div>
        </div>
        {/* <div className="view-mobile">
          <Button>
            <FAS icon="bars" />
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default TopBar;
