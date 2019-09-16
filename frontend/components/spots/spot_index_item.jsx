import React from 'react';
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component { 

  render() {

    const { spot } = this.props;
    
    return(
      <div className = "spot-item" >
        <img src={spot.indexPhoto} className="spot-img" />
        <figcaption className="spot-item-figcaption-container">
          <div className="link-content-container">
            <Link to={`/spots/${spot.id}`} className="spot-item-link">
              {/* <h3 className="spot-item-header-link">this is a caption</h3> */}
              this is a caption
            </Link>
            <p className="spot-item-header-p">some type of description</p>
          </div>
        </figcaption>
      </div>
    )
  }
}


export default SpotIndexItem;