import React from 'react';

const SpotDetails = (props) => {
  const { spot } = props;

  return (
    <div className="spot-details-container">
      <div className="spot-details-header">
        <h3>Details</h3>
      </div>
      <div className="spot-details-body">
        <div className="spot-details-left">
          {/* flex direction column this */}
        </div>
        <div className="spot-details-right">
          {/* flex direction column this */}
        </div>
      </div>
    </div>
  )
}

export default SpotDetails