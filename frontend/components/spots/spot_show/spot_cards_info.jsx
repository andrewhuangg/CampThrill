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
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.water} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.portable_water ? "Portable water available" : "Portable water not available"}
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.cabin} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.cabins ? "Cabins available" : "Cabins not available"}
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container"> 
              <img className="cards-img" src={window.toilet} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.toilets ? "Toilets available" : "Toilets not available"}
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.shower} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.showers ? "Showers available" : "Showers not available"} 
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.grill} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.grills ? "Grills available" : "Grills not available"}
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.signage} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.signage ? "Signage available" : "Signage not available"}
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.tent} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.tents ? "Tents available" : "Tents not available"} 
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.parking} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.parking ? "Parking available" : "Parking not available"}
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.wifi} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.wifi ? "Wifi available" : "Wifi not available"}
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.picnic} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.picnic ? "Picnic available" : "Picnic not available"} 
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.trash} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.trash_bins ? "Trash bins available" : "Trash bins not available"}
              </span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="amenities-cards-info-container">
              <img className="cards-img" src={window.campfire} />
              &nbsp;
              <span className="amenities-cards-span">
                {spot.campfires ? "Campfires bins available" : "Campfires bins not available"}
              </span>
            </div>
          </div>

        </div>

        <div className="cards">
          <div className="cards-header">
            <h3>Activities</h3>
          </div>
      
          {spot.activities.map((activity, idx) =>
            <div className="cards-filter">
              <div className="activities-cards-info-container">
                <img className="cards-img" src={window[activity]} />
                &nbsp;
                <span className="activities-cards-span">{`${activity} is available`}</span>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  )
}


export default SpotCards;