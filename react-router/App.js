import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './home';
import History from './history';
import Routing from './routing'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/history" component={History} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
