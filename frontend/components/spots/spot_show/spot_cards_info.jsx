import React from 'react';

const SpotCards = (props) => {

  const { spot } = props;
  
  return (
    <div className="spot-cards">
      <div className="spot-cards-container">
        <div className="cards">
          <div className="cards-header">
            <h3>Amenities</h3>
          </div>
          <div className="cards-filter">
            <img className="cards-img" src={spot.portable_water ? window.water : window.water} />
            &nbsp;
            <ul>{spot.portable_water ? "Portable water available" : "Portable water not available"} </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default SpotCards;