import {
  createStore,     
  compose,         
  combineReducers, 
  applyMiddleware, 
} from 'redux'
import promise from 'redux-promise';    
import thunk from 'redux-thunk'


import { persistReducer } from 'redux-persist' 
import storage from 'redux-persist/lib/storage' 
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2' 

import {  } from '@/reducer' 


const rootPersistConfig = {
  key: 'reduxData',
  storage,
  stateReconciler: autoMergeLevel2,

  whitelist: [''],  
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose  


const myPersistReducer = persistReducer(
  rootPersistConfig,
  combineReducers({
    
  })
)

const store = createStore(
  myPersistReducer,
  composeEnhancers(applyMiddleware(thunk, promise))
)

export { store }
