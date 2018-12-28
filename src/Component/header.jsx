import React, { Component } from 'react'

import  PropTypes  from 'prop-types';
import themeColor from './themeColor';
import  {connect }  from './Connect'
class Header extends Component {
  static contextTypes={
    store:PropTypes.object
  }

  constructor(props){
    super(props);
    this.state={
      themeColor:''
    }
  }
  _updateColor(){
    const {store} = this.context;
    console.log(store)
    let state = store.getState();
    console.log(store.getState())
    this.setState({
      themeColor:state.themeColor
    })
  }
  componentDidMount(){
    const {store} = this.context;
    this._updateColor();
    store.subscribe(()=>this._updateColor())
  }
  render () {
    return (
      <div>
        <h1 style={{color:this.state.themeColor}}>React.js标题</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    themeColor:state.themeColor
  }
}
Header= connect(mapStateToProps)(Header);
console.log(Header);
export default Header