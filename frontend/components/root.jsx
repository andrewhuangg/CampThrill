import React from "react";
import { Provider } from "react-redux";
import App from './app';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => {
  const footer = window.footer_background;
  return (
    <div className="main-app">
      <div>
        <Provider store={ store }>
          <HashRouter>
            <App store={ store } />
          </HashRouter>
        </Provider>
      </div>


      
    </div>
  )
};

export default Root;