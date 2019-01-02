import React, { Component } from 'react'

import {connect}  from 'react-redux'

import User from './User'
class UsersList extends Component {
  
  constructor(props){
    super(props);
    this.state={
      informationLiList:[
        /*保存名字。性别。年龄 */
      ],
      username:{

        /*保存 名字 */
      },age:{
         /*保存 年龄容器 */
      },gender:{
        /*保存性别 */
      }
    }
  }
  //修改用户名
  _addInformationUserName(e){
   
   this.setState({
     username:e.target.value
   })
  }
  //修改年龄
  
  _addInformationAge(e){
    
    let ff = e.target.value;
  
    if(ff.length>3){
       alert('年龄太长le ');
      return ;
    }
    

    this.setState({
      age:e.target.value
    })
  }
   
  addInformation(e){
    let that = this;
    this.setState({
      informationLiList:[
       { username:this.state.username,
      age: this.state.age,
      gender:this.state.gender
      }

      ]
    },()=>{
      let    ff = this.state.informationLiList;
      return ff;
    })
  
   
    localStorage.setItem('inforMation',JSON.stringify(this.state.informationLiList.username));

    console.log(this.props.InsertInformation)
    if(this.props.InsertInformation){
      this.props.InsertInformation({
        username:  this.refs.inputText.value,
        age:  this.refs.inputNumber.value,
        gender:  this.refs.inputRadio.value
      })
    }
    this.refs.inputText.value=''
    this.refs.inputNumber.value = '';
    this.refs.inputRadio .value = '';

    
  }

  //修改性别
  addInformationGender(e) {
    console.log(e.target.value);

    this.setState({
      gender:e.target.value
    })
  }

    //状态更新之前


    //状态更新完之后。。。。 获取存储的数据
  componentDidUpdate(){
    if(!this.state.informationLiList[0]){
      return ;
    } else{
     
      localStorage.setItem('username',JSON.stringify(this.state.informationLiList[0]));
    }
      
  }

  deleteOne(e){
    if(this.props.deleteUser){
      this.props.deleteUser(e)
    }
  }
  render () {
    
    const {informationList} = this.props||[];
   let  ff =Array.prototype.slice.call(informationList );
  
   ff.map((item,index)=> console.log(item) )
    return (
      <div>
        
        <div className='add-user'>
          <div>Username: <input type='text' onChange={this._addInformationUserName.bind(this)}  ref='inputText'/></div>
          <div>Age: <input type='number'  onChange={this._addInformationAge.bind(this)} ref= 'inputNumber'/></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' onChange={this.addInformationGender.bind(this)}  ref= 'inputRadio'/></label>
            <label>Female: <input type='radio' name='gender' value='female' onChange={this.addInformationGender.bind(this)}  ref= 'inputRadio'/></label>
          </div>
          <button onClick ={this.addInformation.bind(this)}>增加</button>
        </div>
       
       <div className='users-list'>
        {
   
           ff.map((item,index)=>
            
               <User user={item}  key={index} index={index} onDelete = {this.deleteOne.bind(this)}></User>
             
           )
      } 
        </div>
        
      </div>
    )
  }
}

//接受状态

 const mapStateToProps = (state) => {
  return {
    informationList: state
  }
}

//修改数据请求

 const mapDispatchToProps = (dispatch) => {
  return {
    
   InsertInformation : (user ) => {
      dispatch({
        type:'ADD_USER',
        user

        
      })
    },
    deleteUser: ( index)=>{
      dispatch({
        type:'DELETE_USER',
        index
      })
    }
  }
}

UsersList = connect(mapStateToProps,mapDispatchToProps)(UsersList)

export default UsersList