import React from 'react';
import SpotIndexContainer from './spot_index/spots_index_container'
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Spot = () => {
  return (
    <div className="splash-container">

      <div className="spot-index-container">
        <section className="spot-index-container-section">
          <Route exact path="/" component={SpotIndexContainer} />
        </section>
      </div>

      <div className="large-images-container">

        <div className="large-image">
          <img src={window.hand} className="large-img"/>
          <div className="large-image-text">
            <p>Campthrill empowers people to share their land with campers.</p>
          </div>
        </div>

        <div className="large-image">
          <img src={window.dollar} className="large-img"/>
          <div className="large-image-text">
            <p>Creating sustainable revenue and fostering community.</p>
          </div>
        </div>
        
        <div className="large-image">
          <img src={window.palm} className="large-img"/>
          <div className="large-image-text">
            <p>Unlocking access to incredible new places to camp.</p>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default Spot;