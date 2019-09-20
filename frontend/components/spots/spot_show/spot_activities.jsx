import React from 'react';

class SpotActivities extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { spot } = this.props;
    return (
      <div className="spot-activities-container">
        <h3 className="activities-header">Activities</h3>
        <div className="activities-array">
        {spot.activities.map((activity, idx) =>
          <div className="spot-activity-cards" key={idx}>
            <div className="spot-activities">
              <img className="spot-activity-img" src={window[activity]} />
            </div>
            <p className="spot-activity-p">{`${activity.split('_').join(' ')}`}</p>
          </div>
        )}
        </div>
      </div>
    )
  }
}


export default SpotActivities;