import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel';
import GreetingContainer from '../../greeting/greeting_container';
import Modal from '../../modal/modal';
import SpotCards from './spot_cards_info';

class SpotShow extends React.Component {

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    if (!this.props.spot) return null;

    return(
      <div className="spot-show-container">
        <div className="top-level-show-container">
          <div className = "main-show-container" >
            <header className="show-header-container">
              <div className="carousel-container">
                <Carousel photos={this.props.spot.showPhotos}/>
              </div>

              <div className="show-content-main-container">
                <div className="show-content-container">
                  <div className="show-content">
                    <div className="content">
                      {/* header info */}
                      <h1 className="content-header">{this.props.spot.title}</h1>
                      <div className="content-list">
                        <span className="nearby">Nearby: </span>
                          Your dream camping trip.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>

        <div className="show-listing-container">
          <div className="show-listing">
            show listing
            <div className="show-listing-row">
              show listing row
              <div className="show-listing-column">
                spot column
                <section className="overview">
                  overview
                  <div className="overview-header">
                    {/* will render spot details component here */}
                  </div>
                  <div className="overview-cards">
                    <SpotCards spot={this.props.spot} />
                  </div>
                  <div className="overview-details">
                    {/* dails */}
                  </div>
                  <div className="overview-activities">
                    {/* activities */}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default SpotShow;