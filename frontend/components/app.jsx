import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';

const App = () => {
  return (
    <nav className="nav-main-container">

        <div className="left-nav">
          <h1>CampThrill</h1>
        </div>

        <div className="right-nav">
          <GreetingContainer />
          <Modal />
        </div>
    </nav>
  )
}

export default App;