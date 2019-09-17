import React from 'react';
import SpotContainer from './spot_index/spots_index_container'
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

const Spot = () => {
  return (
    <div className="spot-index-container">
      <section className="spot-index-container-section">
        <Route exact path="/" component={SpotContainer} />
      </section>
    </div>
  )
}

export default Spot;