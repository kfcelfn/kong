import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import store from '@/store'  
import Router from './router';  

ReactDOM.render(
  <Provider {...store}>
      <Router />
  </Provider>,
  document.getElementById('root')
)
