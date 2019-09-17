import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../carousel/carousel';
import GreetingContainer from '../../greeting/greeting_container';
import Modal from '../../modal/modal';

class SpotShow extends React.Component {

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    if (!this.props.spot) return null;

    return(

      <div className="top-level-show-container">

        <div className = "main-show-container" >
          <header className="show-header-container">
            <div className="carousel-container">
              <Carousel photos={this.props.spot.showPhotos}/>
            </div>

            <div className="show-content-main-container">
              <div className="show-content-container">
                <div className="show-content">
                  {/* will render show details component here */}
                </div>
              </div>
            </div>
          </header>
        </div>

        <div>
          hello
        </div>

      </div>
    )
  }

}

export default SpotShow;