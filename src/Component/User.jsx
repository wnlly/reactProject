import React, { Component } from 'react'

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
        <div style={{color:'red'}}>Name: {this.state.userList.props.id}</div>
        <div>Age:  {this.state.userList.name}</div>
        <div>Gender: {this.state.userList.title} </div>
        <button>删除</button>
      </div>
    )
  }
}

export default User