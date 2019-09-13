import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

  const heart_tent_gif = window.heart_tent_gif;

  const personalGreeting = () => (
    <div className="logged-in-right-nav-bar">
      <button onClick={logout} className="heart-gif-button">
        <img src={heart_tent_gif} className="heart-gif" />
      </button>
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