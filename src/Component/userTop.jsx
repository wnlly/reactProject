import React,{Component} from 'react';

import  PropTypes from 'prop-types';

import User from '../Component/User'


import {Provider} from 'react-redux';

import {createStore} from 'redux'


  const Listreducer =  (state = [1,2,3,4], action) => {
  switch (action.type) {

  case 'ADD_USER':
    return [...state,action.user];

    case 'DELETE_USER':
  
  
  
    return [...state.slice(0,action.index-1),...state.slice(action.index+1,action.length)];
  
    case 'UPDATE_USER':
    let  array = [...state];
    return  state =  array.prototype.splice(action.index,1,action.user);
    default:
    return state;
  }
};

let  store = createStore(Listreducer);
console.log(createStore(Listreducer))
console.log(store)

class UserTop extends Component{

   static childContextTypes = {
     store:PropTypes.object
   }
  constructor(props){
    super(props);
  }
  
  getChildContext(){
    return {store}
  }
  
  render(){
    return(
      <Provider store={store}>
        <div>
          <User></User>
        </div>
      </Provider>
    )
  }
  
}
export default UserTop