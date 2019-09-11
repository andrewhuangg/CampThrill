import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

  const personalGreeting = () => (
    <div>
      <h2>Welcome to campThrill, {currentUser.first_name}!</h2>
      <button onClick={ logout }>Log out</button>
    </div>
  );

  const sessionLinks = () => (
    <div className="user-menu">
      <button className="navbar-button" onClick={() => openModal('login')}>Log in</button>
        &nbsp; &nbsp;
      <button className="navbar-button" onClick={() => openModal('signup')}>Sign up</button>
    </div>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting