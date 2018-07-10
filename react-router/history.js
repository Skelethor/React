import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

class History extends Component {
    render() {
      return (
        <div className="History">
            <NavLink to="/"> Accueil </NavLink>
            <NavLink to="/history" activeClassName="selected"> Notre histoire </NavLink>
        <h1>History</h1>
          <p className="History-intro">
            History.
          </p>
        </div>
      );
    }
  }
  
  export default History;