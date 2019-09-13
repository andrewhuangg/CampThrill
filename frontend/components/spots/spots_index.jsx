import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {

    const { spots } = this.props;

    return (
      <div className="spot-index-container">
        <div className="index-item-container">
          <ul>
            {spots.map(spot => 
            <SpotIndexItem 
              key={spot.id}
              spot={spot}
            />
            )}
          </ul>
        </div>
      </div>
    )

  }

}

export default SpotIndex;