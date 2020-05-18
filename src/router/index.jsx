import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Demo } from './assembly';

import '@/utils/rem'
import '@/index.less';
import '@/utils/reset.css'  

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch> 
          <Route path='/demo' component={Demo}/>     
        </Switch>
      </BrowserRouter>
    )
  }
}
