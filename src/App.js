import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import {createStore}  from 'redux'
import Content from './containers(smart)/content.jsx';
import Header from './containers(smart)/header'

import PropTypes from 'prop-types';
import themeColor from './Component/themeColor';

import {Provider} from 'react-redux';

import User from './Component/User';
import UserList from './Component/UserDelete';
import UserRouter from './Component/UserList'
import UserTop from  './Component/userTop'
const themeReducer =  (state, action) => {
  if (!state) {
    return {
      themeColor: 'red',
    };
  }
  switch (action.type) {
    case 'UPDATE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor,
      };

    default:
      return state;
  }
}
const store = createStore (themeReducer);
console.log (store);
let users= {
  id:'123',
  title:'wn',
  name:'1234'
}
class App extends Component {
  

  render () {
    return (
      <Provider store ={store}>
        <Header />
        <Content> </Content>
        <User props={users}></User>
        <UserList></UserList>
        
        <UserRouter></UserRouter>
        <UserTop></UserTop>
      </Provider>
    );
  }
}

export default App;
