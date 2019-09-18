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
            <img className="cards-img" src={window.water} />
            &nbsp;
            {spot.portable_water ? "Portable water available" : "Portable water not available"}
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.cabin} />
            &nbsp;
            {spot.cabins ? "Cabins available" : "Cabins not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.toilet} />
            &nbsp;
            {spot.toilets ? "Toilets available" : "Toilets not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.shower} />
            &nbsp;
            {spot.showers ? "Showers available" : "Showers not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.grill} />
            &nbsp;
            {spot.grills ? "Grills available" : "Grills not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.signage} />
            &nbsp;
            {spot.signage ? "Signage available" : "Signage not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.tent} />
            &nbsp;
            {spot.tents ? "Tents available" : "Tents not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.parking} />
            &nbsp;
            {spot.parking ? "Parking available" : "Parking not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.wifi} />
            &nbsp;
            {spot.wifi ? "Wifi available" : "Wifi not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.picnic} />
            &nbsp;
            {spot.picnic ? "Picnic available" : "Picnic not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.trash} />
            &nbsp;
            {spot.trash_bins ? "Trash bins available" : "Trash bins not available"} 
          </div>

          <div className="cards-filter">
            <img className="cards-img" src={window.campfire} />
            &nbsp;
            {spot.campfires ? "Campfires bins available" : "Campfires bins not available"} 
          </div>          
        </div>

        <div className="cards">
          <div className="cards-header">
            <h3>Activities</h3>
          </div>

          <div className="cards-filter">
            {/* {spot.activities.map((activity, idx) => 
              <img className="cards-img" src={window.activity} />
            )} */}
          </div>  


        </div>


      </div>
    </div>
  )
}


export default SpotCards;