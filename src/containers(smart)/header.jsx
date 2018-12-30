import {connect } from 'react-redux';

import  Header from '../Component/header'
const  mapStateToProps = (state) => {
  return {
     themeColor: state.themeColor
  }
}
export default connect(mapStateToProps)(Header)