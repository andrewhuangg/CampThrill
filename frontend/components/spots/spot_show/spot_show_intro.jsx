import React from 'react';

class SpotIntro extends React.Component {
  
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let headshot;
    const { spot } = this.props;

    if (spot.user.first_name === "ben" && spot.user.last_name === "simmons") {
      headshot = window.bensimmons
    } else if (spot.user.first_name === "joel" && spot.user.last_name === "embiid") {
      headshot = window.joelembiid
    }


    return (
      <div className="spot-intro-header-container">
        <div className="spot-intro-header">
          <h3 className="spot-intro-h3"><img className="spot-headshot-img" src={headshot} /></h3>
        </div>
        <div className="spot-intro-body-container">
          <h3 className="spot-body-h3">Hosted by {spot.user.first_name}</h3>
          <p className="spot-intro-p">{spot.description}</p>
        </div>
      </div>
    )
  }
}

export default SpotIntro