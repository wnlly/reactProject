import React, { Component } from 'react'

import { connect } from 'react-redux';
 
class User extends Component {
  constructor(props){
    super(props);
    this.state={
      userList:''
    }
  }
  componentDidMount(){
    console.log(this.props.datalist);
 


    this.setState({
      userList:this.props.datalist
    })
  }

  // componentDidUpdate(){
   
  //   if(!this.props.datalist ){
  //     return ;
  //   }

  //  else{

  //   this.setState({
  //     userList:this.props.datalist
  //   })
  // }
  
  render () {

    const user = this.props.user||[];
    const onDelete = this.props.onDelete;
    const index= this.props.index;

    console.log(user,onDelete,index)
    
   

    
      return (
       
      
      
     
          <div>
         
            <div>Name:  {user.username}</div> 
            <div>Age: {user.age}</div>
            <div>Gender: {user.gender}  </div>
            <button onClick= {() => {onDelete(index)}}>删除</button>
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