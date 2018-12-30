

import {HashRouter as Router,Route,Link}  from 'react-router-dom'

import React, { Component } from 'react'

import Header from './header'
export default class UserList extends Component {
  render() {
    return (
      <div>
       <Router>
        <Route path='/adds' component={Header}></Route>
       </Router>
      </div>
    )
  }
}
