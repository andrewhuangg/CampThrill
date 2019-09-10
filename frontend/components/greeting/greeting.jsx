import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const personalGreeting = () => (
    <div>
      <h2>Welcome to campThrill, {currentUser.first_name}!</h2>
      <button onClick={ logout }>Log out</button>
    </div>
  );

  const sessionLinks = () => (
    <nav>
      <Link to="/login">Log in</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign up</Link>
    </nav>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting