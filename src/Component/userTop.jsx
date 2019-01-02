import React,{Component} from 'react';

import  PropTypes from 'prop-types';

import UserDelete from  '../Component/UserDelete';
import '../css/index.css'


import {Provider} from 'react-redux';

import {createStore} from 'redux'


  const Listreducer =  (state = [], action) => {
  switch (action.type) {

  case 'ADD_USER':
    return [...state,action.user];

    case 'DELETE_USER':
  
    let arrays = [...state];
    return  state =  arrays.prototype.splice(action.index,1);

  
   
  
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

      <div className="container">
       
          

          <UserDelete></UserDelete>
          
          </div>
        
      </Provider>
    )
  }
  
}
export default UserTop