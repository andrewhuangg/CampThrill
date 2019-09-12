import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';

const App = () => {

  const hipcamp_logo = window.hipcamp_logo;
  const footer_background = window.footer_background;
  return (
    <div className="main-container">

      <nav className="nav-main-container">
        <div className="left-nav">
          <img src={hipcamp_logo} className="hipcamp_logo" />
        </div>

        <div className="right-nav">
          <GreetingContainer />
          <Modal />
        </div>
      </nav>

      <footer className="footer">
        <section className="footer-main">
          <img className="ftr-bg"src={footer_background} />;
        </section>
      </footer>

    </div>
  )
}

export default App;