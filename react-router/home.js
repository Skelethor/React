import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
      return (
        <div className="Home">
            <NavLink to="/" activeClassName="selected"> Accueil </NavLink>
            <NavLink to="/history"> Notre histoire </NavLink>
            <h1>Bienvenue sur l'accueil</h1>
          <p className="Home-intro">
            Bienvenue.
          </p>
        </div>
      );
    }
  }
  
  export default Home;