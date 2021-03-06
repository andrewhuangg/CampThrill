import React from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="header-container">
        <div className="header-body">
          <h2 className="header-body-title">A home for thrill seekers</h2>
  
          <div className="header-body-text">
            <h1 className="header-body-h1">Book unique camping experiences on over <b>300,000</b> campsites, ranches, vineyards, public parks and more.</h1>
          </div>
        </div>
      </div> 
    )
  }
}

export default Header;