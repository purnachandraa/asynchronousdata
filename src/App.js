import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../src/home';
import Details from '../src/details';
import Final from '../src/final';
import Data from '../src/data';
import signup from '../src/signup';
import Datass from '../src/data123';
import Table from '../src/table';
import Tablee from '../src/tablee';
import Userdetails from '../src/userdetails/userdetails';
import Navdesign from '../src/navdesign/navdesign';
class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/details' component={Details} />
          <Route path='/final' component={Final} />
          <Route path='/data' component={Data} />
          <Route path='/signup' component={signup} />
          <Route path='/table' component={Table} />
          <Route path='/datass' component={Datass} />
          <Route path='/tabdata' component={Tablee} />
          <Route path='/navdesign' component={Navdesign} />
          <Route path='/userdetails/:id' component={Userdetails} />
        </Switch>

      </Router>
    );
  }
}

export default App;
