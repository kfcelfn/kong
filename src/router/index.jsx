import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Error, Hook } from './assembly';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
          <Route path='/404' component={Error}/>     
          <Route path='/' component={Hook}/>     
        </Switch>
      </BrowserRouter>
    )
  }
}
