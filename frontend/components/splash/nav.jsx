import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import Modal from '../modal/modal';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Nav = () => {

  const hipcamp_logo = window.hipcamp_logo;
  
  return (
    <div className="master-nav-container">
      <nav className="nav-main-container">
        <div className="left-nav">
          <Link to="/">
            <img src={hipcamp_logo} className="hipcamp_logo" />
          </Link>
        </div>
        <div className="right-nav">
          <GreetingContainer />
          <Modal />
        </div>
      </nav>
    </div>
  )

}

export default Nav