import React, { Component } from 'react'

import {Router,Route,Link} from 'react-router'
export default class Routers extends Component {
  render() {
    return (
      <div>
        <li><Link to='/app'></Link>
        </li>
        <li><Link to='/div'></Link></li>
      </div>
    )
  }
}
