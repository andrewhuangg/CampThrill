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

      <SpotContainer />

      <footer className="footer">
        <section className="footer-main">
        </section>
      </footer>

    </div>
  )
}

export default App;