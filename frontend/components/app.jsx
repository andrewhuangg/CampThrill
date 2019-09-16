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

      <div className="master-container">
        <div className="header-container">
          <div className="header-body">
            <h2 className="header-body-title">A home for thrill seekers</h2>

            <div className="header-body-text">
              <h1 className="header-body-h1">Book unique camping experiences on over 300,000 campsites, ranches, vineyards, public parks and more.</h1>
            </div>
          </div>
        </div>

        <div className="spot-index-container">
          <section className="spot-index-container-section">i want to be the body
            <SpotContainer />
          </section>
        </div>
      </div>


    <footer className="footer">
      <div className="footer-main">
        <div className="footer-description-container">
          
          <div className="footer-description">
            <div className="footer-description-text-title">
              <h3 className="footer-description-text-h3">CampThrill, a place for adrenaline, a place for adventure, a place you want to be.</h3>
            </div>
            <div className="footer-description-text-body">
              <p className="footer-description-text-p">
                "Discover unique experiences on ranches, nature preserves, farms, vineyards, and public campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents and more."
              </p>
            </div>
          </div>

          <div className="footer-social-container">
            <div className="footer-social">
              <div className="footer-social-title">Social</div>
              <div className="footer-social-github">
                <a href="https://github.com/andrewhuangg" className="footer-social-github-link">
                  <i className="fab fa-github">Github</i>
                </a>
              </div>
              <div className="footer-social-linkedin">
                  <a href="https://www.linkedin.com/in/anuhangg/">
                    <i className="fab fa-linkedin-in">Linkedin</i>
                  </a>
              </div>
            </div>
          </div>

        </div>


      </div>
    </footer>

    </div>
  )
}

export default App;