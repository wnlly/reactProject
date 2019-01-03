import React, { Component } from 'react'

export default class Child extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick = {()=>this.props.onDelete('div')}> 点击一下</button>
      </div>
    )
  }
}
