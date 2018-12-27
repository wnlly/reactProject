import React, { Component } from 'react'


import ThemeColor from './themeColor'
import PropTypes from 'prop-types'
export default class Content extends Component {

  static contextTypes={

    store :PropTypes.object
  }
  constructor (props) {
    super(props);
    this.state={
      themeColor:''
    }
    
  }
  
  _updateColor(){
    const {store} =  this.context;
    const state = store.getState();
    this.setState({
      themeColor:state.themeColor
    })
  }
  componentDidMount(){
    const {store}  = this.context
    this._updateColor()
    store.subscribe(()=>this._)
  }
  render() {
    return (
      <div>
        <p style={{color:this.state.themeColor}}>React.js内容</p>
        <ThemeColor></ThemeColor>
      </div>
    )
  }
}
