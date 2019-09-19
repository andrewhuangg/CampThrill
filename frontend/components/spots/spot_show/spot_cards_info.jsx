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

          {spot.portable_water &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.water} />
                &nbsp;
                <span className="amenities-cards-span">
                  {spot.portable_water ? "Portable water available" : "Portable water not available"}
                </span>
              </div>
            </div>
          }

          {spot.cabins && 
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.cabin} />
                &nbsp;
                <span className="amenities-cards-span">
                  Cabins available
                </span>
              </div>
            </div>
          }

          {spot.toilets &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container"> 
                <img className="cards-img" src={window.toilet} />
                &nbsp;
                <span className="amenities-cards-span">
                  Toilets available
                </span>
              </div>
            </div>          
          }

          {spot.showers &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.shower} />
                &nbsp;
                <span className="amenities-cards-span">
                  Showers available
                </span>
              </div>
            </div>
          }

          {spot.grills &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.grill} />
                &nbsp;
                <span className="amenities-cards-span">
                  Grills available
                </span>
              </div>
            </div>
          }

          {spot.signage &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.signage} />
                &nbsp;
                <span className="amenities-cards-span">
                  Signage available
                </span>
              </div>
            </div>
          }

          {spot.tents &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.tent} />
                &nbsp;
                <span className="amenities-cards-span">
                  Tents available
                </span>
              </div>
            </div>
          }

          {spot.parking &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.parking} />
                &nbsp;
                <span className="amenities-cards-span">
                  Parking available
                </span>
              </div>
            </div>
          }

          {spot.wifi &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.wifi} />
                &nbsp;
                <span className="amenities-cards-span">
                  Wifi available
                </span>
              </div>
            </div>
          }

          {spot.picnic &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.picnic} />
                &nbsp;
                <span className="amenities-cards-span">
                  Picnic available
                </span>
              </div>
            </div>
          }

          {spot.trash_bins &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.trash} />
                &nbsp;
                <span className="amenities-cards-span">
                  Trash bins available
                </span>
              </div>
            </div>
          }

          {spot.campfires &&
            <div className="cards-filter">
              <div className="amenities-cards-info-container">
                <img className="cards-img" src={window.campfire} />
                &nbsp;
                <span className="amenities-cards-span">
                  Campfires bins available
                </span>
              </div>
            </div>
          }

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
                <span className="activities-cards-span">{`${activity}`}</span>
              </div>
            </div>
          )}

        </div>

        <div className="cards">
          <div className="cards-header">
            <h3>Campsite area</h3>
          </div>

          <div className="cards-filter">
            <div className="campsitearea-cards-info-container">
              {spot.cabins ? <img className="cards-img" src={window.cabin} /> : <img className="cards-img" src={window.tent} />}
              &nbsp;
              {spot.cabins ? <span className="campsitearea-cards-span">Enjoy your stay in our beautiful cabins</span> : <span className="campsitearea-cards-span">Bring your own tents</span>}
            </div>
          </div>

          <div className="cards-filter">
            <div className="campsitearea-cards-info-container">
              <img className="cards-img" src={window.sites} />
              &nbsp;
              <span className="campsitearea-cards-span">{`${spot.sites} sites available`}</span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="campsitearea-cards-info-container">
              <img className="cards-img" src={window.group_size} />
              &nbsp;
              <span className="campsitearea-cards-span">{`Up to ${spot.group_size} per site`}</span>
            </div>
          </div>

          <div className="cards-filter">
            <div className="campsitearea-cards-info-container">
              <img className="cards-img" src={window.sites} />
              &nbsp;
              <span className="campsitearea-cards-span">{`${spot.sites} sites available`}</span>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  )
}


export default SpotCards;