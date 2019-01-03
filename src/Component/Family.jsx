


import React, { Component } from 'react'

import Child from './Child'
export default class Family extends Component {


  handOnClick(e){
    console.log(e)
  }
  render() {
    return (
      <div>
          <Child onDelete={ this.handOnClick.bind(this)}></Child>
      </div>
    )
  }
}
