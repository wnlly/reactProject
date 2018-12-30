


import {connect } from 'react-redux' ;

import ThemeColor from  '../Component/themeColor'
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}
const  mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({
        type: 'UPDATE_COLOR',
        themeColor: color
      })
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ThemeColor)