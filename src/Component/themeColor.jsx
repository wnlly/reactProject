import React, { Component } from 'react'

import  PropTypes  from 'prop-types';
export default class themeColor extends Component {
  static contextTypes={
    store:PropTypes.object
  }
  constructor(props){
    super(props);
    this.state={
      onclikc:'true'
    }
    this._updateColor=this._updateColor.bind(this)
  }
  _updateColor(e){
   const {store } = this.context;
   let value = e.target.value.toLowerCase();
   console.log(value);
   
   store.dispatch({
      type: 'UPDATE_COLOR',
      themeColor: value
    })
    console.log(this.context);
  
  }

  _updateColors(){
    const {store} = this.context;
    let state = store.getState();
    this.setState({
      themeColor:state.themeColor
    })
  }
  componentDidMount(){
    const {store}  =this.context;
    this._updateColors();
    store.subscribe(()=>this._updateColors())
  }
 
  render() {
    return (
      <div>
        <input type="button" value="RED" onClick={this._updateColor} style={{color:this.state.themeColor}}></input>
        <input type="button" value="YELLOW" onClick={this._updateColor} style={{color:this.state.themeColor}}></input>

      </div>
    )
  }
}
