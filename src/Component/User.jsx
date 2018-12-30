import React, { Component } from 'react'

import { connect } from 'react-redux';
 
class User extends Component {
  constructor(props){
    super(props);
    this.state={
      userList:this.props
    }
  }
  componentDidMount(){
    console.log(this.props);
    console.log(this.state.userList)
  }
  render () {
    return (
      <div>
        <div style={{color:'red'}}>Name: </div>
        <div>Age: </div>
        <div>Gender:  </div>
        <button>删除</button>
      </div>
    )
  }
}
 const mapStateToProps = (state, ownProps) => {
  return {
    datalist: state
  }
}

User = connect(mapStateToProps)(User)
export default User