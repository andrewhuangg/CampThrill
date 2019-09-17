import React from 'react';
import { Link } from 'react-router-dom';

class SpotIndexItem extends React.Component { 

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const spotId = this.props.spot.id;
    this.props.ownProps.history.push(`/spots/${spotId}`)
  }

  render() {
    const tent_avatar = window.tent_avatar;
    const { spot, title } = this.props;
    return(
      <div className = "spot-item" >
        <img src={spot.indexPhoto} className="spot-img" onClick={this.handleClick}/>
        <figcaption className="spot-item-figcaption-container">
          <div className="link-content-container">
            <h3 className="spot-item-link" onClick={this.handleClick}>
              {title}
              <img src={tent_avatar} className="tent_avatar" />
            </h3>
            <p className="spot-item-header-p">{Math.floor(Math.random() * (Math.floor(101) - Math.ceil(50))) + Math.ceil(50)}</p>
          </div>
        </figcaption>
      </div>
    )
  }
}


export default SpotIndexItem;