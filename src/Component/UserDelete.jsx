import React, { Component } from 'react'

class UsersList extends Component {
  render () {
    return (
      <div>
        
        <div className='add-user'>
          <div>Username: <input type='text' /></div>
          <div>Age: <input type='number' /></div>
          <div>Gender:
            <label>Male: <input type='radio' name='gender' value='male' /></label>
            <label>Female: <input type='radio' name='gender' value='female' /></label>
          </div>
          <button>增加</button>
        </div>
       
        <div className='users-list'>{/* TODO */}</div>
      </div>
    )
  }
}
export default UsersList