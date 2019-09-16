import React from 'react';
import { Link } from 'react-router-dom';


class SpotShow extends React.Component {

  constructor(props) {
    super(props)
    

  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    return(
      <div className = "main-show-container" >
        <header className="show-header-container">
          <div className="carousel-container">
            {/* will render carousel here */}
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
    )
  }

}

export default SpotShow;