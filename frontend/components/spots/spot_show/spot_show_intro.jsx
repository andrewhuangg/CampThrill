import React from 'react';

const SpotIntro = (props) => {
  const { spot } = props;
  
  return (
    <div className="spot-intro-header-container">
      <div className="spot-intro-header">
        <h3>placeholder for user photo</h3>
      </div>
      <div className="spot-intr-body-container">
        <h3>Hosted by {spot.user.first_name}</h3>
        <p>{spot.description}</p>
      </div>
    </div>
  )
}

export default SpotIntro