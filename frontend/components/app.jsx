import React from 'react';
import Splash from './spots/splash';
import SpotIndex from './spots/spot_index/spot_index_page';
import SpotShowContainer from './spots/spot_show/spot_show_container';
import Nav from './splash/nav';
import Header from './splash/header';
import Footer from './splash/footer';
import { 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';

const App = () => {

  return (
    <div className="main-container">
      <Route path="/" component={Nav} />

      <div className="body-container">
        <Route exact path="/" component={Header} />
        <Route exact path="/" component={Splash} />
        <Route exact path="/spots" component={SpotIndex} />
      </div>
      
      <div className="spotshow-master-container">
        <Route exact path="/spots/:spotId" component={SpotShowContainer} />
      </div>

      <Route path="/" component={Footer} />
    </div>
  )
}

export default App;