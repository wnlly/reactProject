import PropTypes from 'prop-types';
import React, { Component } from 'react';


export  let connect =(mapStateToProps,mapDispatchToProps) => (WrapMent)=>{
  

  class Connect  extends Component {
  static contextTypes={
    store:PropTypes.object
  }

  constructor(props){
    super(props);
    this.state={
    allProps:{ }
    }
  }
  _updateColor(){
    const {store} = this.context;
   let stateToprops =mapStateToProps? mapStateToProps(store.getState(),this.props):{}
    let dispatchProps =mapDispatchToProps ? mapDispatchToProps(store.dispatch,this.props) :{}
    console.log(store.getState())
    this.setState({
      allProps:{
        ...stateToprops,
        ...dispatchProps,
        ...this.props,
      }
    })
  };


  componentDidMount(){
    const {store}  = this.context;
    this._updateColor()
    store.subscribe(()=>this._updateColor())
  }
  render () {
   
    return (
      <WrapMent {...this.state.allProps}/>
    )
  }
}
 return Connect
}

