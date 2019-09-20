import React from 'react';

class SpotDetails extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    const { spot } = this.props;
    return (
      <div className="spot-details-container">
        <div className="spot-details-header">
          <h3 className="spot-details-header-h3">Details</h3>
        </div>

        <div className="spot-details-body">
          <div className="spot-details-left">
            <div className="details">
              <p>Check in: After {spot.check_in} PM</p>
            </div>
            <div className="details">
              <p>Check out: Before {spot.check_out} PM</p>
            </div>
            <div className="details">
              <p>Cancellation policy: {spot.cancellation_policy}</p>
            </div>
          </div>

          {spot.minimum_nights < 1 ?
            <div className="spot-details-right">
              <p> Minimum nights: none </p>
            </div>
            :
            <div className="spot-details-right">
              <p> Minimum nights: {spot.minimum_nights}</p>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default SpotDetails