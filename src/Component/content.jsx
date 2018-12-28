import React, { Component } from 'react'

import  {connect } from './Connect'

import ThemeColor from './themeColor'
import PropTypes from 'prop-types'
 class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }
  
  render() {
    return (
      <div>
        <p style={{color:this.props.themeColor}}>React.js内容</p>
        <ThemeColor></ThemeColor>
      </div>
    )
  }
}

let mapStateToPropos = (state) =>{
  return {
    themeColor:state.themeColor
  }
}
Content = connect(mapStateToPropos)(Content) ;
export default Content