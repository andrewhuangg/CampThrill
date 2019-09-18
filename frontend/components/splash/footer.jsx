import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-wrapper">
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
                  <i className="fab fa-github"></i>
                  <a href="https://github.com/andrewhuangg" className="footer-social-github-link">Github
                  </a>
                </div>
                <div className="footer-social-linkedin">
                  <i className="fab fa-linkedin-in"></i>
                  <a href="https://www.linkedin.com/in/anuhangg/" className="footer-social-linkedin-link">Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom-container">
        <div className="footer-bottom">
          <p>Made in California.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;