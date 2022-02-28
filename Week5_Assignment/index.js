import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import { rootReducer } from './reduxReducer/Reducer';
const store=createStore(rootReducer);
const Ex=()=>{
  return <>
  <Provider store={store}>
    <App/>
    </Provider> 
  </>
}
ReactDom.render(<Ex/>,document.getElementById('root'));
