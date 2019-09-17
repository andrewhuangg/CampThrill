import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Footer = () => {
  return (
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
  )
}

export default Footer;