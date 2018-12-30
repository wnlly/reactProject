import React, { Component } from 'react'

import  PropTypes  from 'prop-types';
  class ThemeColor extends Component {
  static contextTypes={
    store:PropTypes.object
  }
 
  _updateColor(e){
   const {store } = this.context;
   let value = e.target.value.toLowerCase();
  
   if(this.props.onSwitchColor) {
     this.props.onSwitchColor(value)
   }
  
  }

  
 
  render() {
    return (
      <div>
        <input type="button" value="RED" onClick={this._updateColor.bind(this)} style={{color:this.props.themeColor}}></input>
        <input type="button" value="YELLOW" onClick={this._updateColor.bind(this)} style={{color:this.props.themeColor}}></input>

      </div>
    )
  }
}


export default ThemeColor
