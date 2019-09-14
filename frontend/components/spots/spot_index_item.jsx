import React from 'react';

const SpotIndexItem = ({ spot }) => {
  return (
    <div className="spot-item">
      <h1>i am a spot</h1>
      <img src={spot.indexPhoto} />
    </div>
  )
}

export default SpotIndexItem;