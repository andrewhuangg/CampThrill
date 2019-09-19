import React from 'react';

const SpotIntro = (props) => {
  const { spot } = props;

  let headshot;
  // if (spot.host_id === ben_simmons.id) {
  //   headshot = window.bensimmons;
  // } else if (spot.host_id === joel_embiid) {
  //   headshot = window.joelembiid;
  // }

  return (
    <div className="spot-intro-header-container">
      <div className="spot-intro-header">
        {/* <h3 className="spot-intro-h3"><img className="spot-headshot-img" src={window.headshot} /></h3> */}
      </div>
      <div className="spot-intro-body-container">
        {/* <h3>Hosted by {spot.user.first_name}</h3> */}
        <p className="spot-intro-p">{spot.description}</p>
      </div>
    </div>
  )
}

export default SpotIntro