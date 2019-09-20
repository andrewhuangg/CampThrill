import React from 'react';

class SpotCards extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
   
  render() {
    const { spot } = this.props;
      return (
        <div className="spot-cards">
          <div className="spot-cards-container">
            <div className="cards">
              <div className="cards-header">
                <h3>Amenities</h3>
              </div>

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

            </div>

            <div className="cards">
              <div className="cards-header">
                <h3>Essentials</h3>
              </div>

              {spot.portable_water &&
                <div className="cards-filter">
                  <div className="amenities-cards-info-container">
                    <img className="cards-img" src={window.water} />
                    &nbsp;
                    <span className="amenities-cards-span">
                      Portable water available
                    </span>
                  </div>
                </div>
              }

              {spot.pets_allowed > 0 &&
                <div className="cards-filter">
                  <div className="amenities-cards-info-container">
                    <img className="cards-img" src={window.pet} />
                    &nbsp;
                    <span className="amenities-cards-span">
                      Pets allowed
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

              {spot.campfires &&
                <div className="cards-filter">
                  <div className="amenities-cards-info-container">
                    <img className="cards-img" src={window.campfire} />
                    &nbsp;
                    <span className="amenities-cards-span">
                      Campfire allowed
                    </span>
                  </div>
                </div>
              }

            </div>

            <div className="cards">
              <div className="cards-header">
                <h3>Campsite area</h3>
              </div>

              <div className="cards-filter">
                <div className="campsitearea-cards-info-container">
                  {spot.cabins ? <img className="cards-img" src={window.cabin} /> : <img className="cards-img" src={window.tent} />}
                  &nbsp;
                  {spot.cabins ? <span className="campsitearea-cards-span">Enjoy our beautiful cabins</span> : <span className="campsitearea-cards-span">Bring your own tents</span>}
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

            </div>
            
          </div>
        </div>
      )
    }
}


export default SpotCards;