import React, { Component } from 'react'

import {connect}  from 'react-redux'
class UsersList extends Component {
  
  constructor(props){
    super(props);
    this.state={
      informationLiList:[],
      username:{

      },age:{

      },gender:{

      }
    }
  }
  _addInformationUserName(e){
    console.log(e.target.value);
   this.setState({
     username:e.target.value
   })
  }
  
  _addInformationAge(e){
    
    let ff = e.target.value;
    console.log(ff.length)
    if(ff.length>3){
      return alert('年龄太长le ');
      
    }
    console.log(e);
  }
   
  addInformation(e){
    let that = this
    this.setState({
      informationLiList:[
       { username:this.state.username}

      ]
    },()=>{
      let    ff = this.state.informationLiList;
      return ff;
    })
    console.log(that.state.informationLiList)
   
    localStorage.setItem('inforMation',JSON.stringify(this.state.informationLiList.username));
    this.refs.inputText.value=''
  }
  addInformationGender(e) {
    console.log(e.target.value);
  }

  componentDidUpdate(){
    console.log((this.state.informationLiList))
     if(this.state.informationLiList[0].username){
       localStorage.setItem('inforMation',JSON.stringify(this.state.informationLiList[0].username));
     }
     else{
       return ;
     }
    
  }
  render () {
    return (
      <div>
        
        <div className='add-user'>
          <div>Username: <input type='text' onChange={this._addInformationUserName.bind(this)}  ref='inputText'/></div>
          <div>Age: <input type='number'  onChange={this._addInformationAge.bind(this)}/></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' onChange={this.addInformationGender.bind(this)} /></label>
            <label>Female: <input type='radio' name='gender' value='female' onChange={this.addInformationGender.bind(this)} /></label>
          </div>
          <button onClick ={this.addInformation.bind(this)}>增加</button>
        </div>
       
        <div className='users-list'>{/* TODO */}</div>
      </div>
    )
  }
}

 const mapStateToProps = (state) => {
  return {
    informationList: state
  }
}

 const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
   InsertInformation : () => {
      dispatch({
        type:'ADD_USER',
        user:{
          Username:'杨芳',
          age:20,
        }
      })
    }
  }
}

export default UsersList