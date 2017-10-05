import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Checkout from './Checkout.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div>
      <Switch>
        <Route exact path = "/checkout/" component = {Checkout} />
      </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
