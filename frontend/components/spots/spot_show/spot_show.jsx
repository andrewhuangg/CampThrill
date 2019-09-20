import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel';
import GreetingContainer from '../../greeting/greeting_container';
import Modal from '../../modal/modal';
import SpotCards from './spot_cards_info';
import SpotActivities from './spot_activities';
import SpotIntro from './spot_show_intro';
import SpotDetails from './spot_detail';

class SpotShow extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
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
                    <h1 className="content-header">{this.props.spot.title}</h1>
                    <button className="content-header-location-btn">
                      <Link to="/spots">{this.props.spot.location}</Link>
                    </button>
                    <div className="content-list">
                      <span className="like">
                        <img className="like-img" src={window.like }/>
                      </span>
                        Your dream camping trip.
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>

        <div className="show-listing-container">
          <div className="show-listing">

            <div className="show-listing-column">
              <section className="overview">
                <div className="overview-header">
                  <SpotIntro spot={this.props.spot} />
                </div>
                <div className="overview-cards">
                  <SpotCards spot={this.props.spot} />
                </div>
                <div className="overview-details">
                  <SpotDetails spot={this.props.spot} />
                </div>
                <div className="overview-activities">
                  <SpotActivities spot={this.props.spot} />
                </div>
              </section>  
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default SpotShow;