import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from '../components/session_form/login_form_container';
import SignupFormContainer from '../components/session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => {
  return (
    <nav>
        <div className="left-nav">
          <div className="logo">
            <h1>campThrill</h1>
            <GreetingContainer />
          </div>
        </div>
        <div className="right-nav">
          <div className="links">
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
          </div>
        </div>
    </nav>
  )
}

export default App;