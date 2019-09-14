import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SpotContainer from './spots/spots_index_container';
import Modal from './modal/modal';
import { 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';

const App = () => {

  const hipcamp_logo = window.hipcamp_logo;

  return (
    <div className="main-container">

      <div className="master-nav-container">
        <nav className="nav-main-container">
          <div className="left-nav">
            <img src={hipcamp_logo} className="hipcamp_logo" />
          </div>
          <div className="right-nav">
            <GreetingContainer />
            <Modal />
          </div>
        </nav>
      </div>

      <div className="master-header-container">
        <div className="header-container">
          <div className="header-body">
            <h2 className="header-body-title">A home for thrill seekers</h2>

            <div className="header-body-text">
              <h1 className="header-body-h1">Book unique camping experiences on over 300,000 campsites, ranches, vineyards, public parks and more.</h1>
            </div>
          </div>
        </div>
      </div>

    <div className="spot-index-container">
      <section>i want to be the body
        <SpotContainer />
      </section>
    </div>

      <footer className="footer">
        <section className="footer-main">
        </section>
      </footer>

    </div>
  )
}

export default App;