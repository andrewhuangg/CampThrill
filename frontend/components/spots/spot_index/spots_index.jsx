import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    const { spots, ownProps } = this.props;
    return (
      <div className="spot-index-body">
        <div className="index-item-container">
          <ul className="spot-ul">
            {spots.map(spot => 
              <div className="spot-item-container" key={spot.id}>
                <SpotIndexItem 
                  spot={spot}
                  ownProps={ownProps}
                  title={spot.title}
                />
              </div>
            )}
          </ul>
        </div>
      </div>
    )

  }

}

export default SpotIndex;