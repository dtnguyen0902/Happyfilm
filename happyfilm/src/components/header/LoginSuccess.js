import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import *as  action from '../../redux/action/Action';

class LoginSuccess extends Component {

  logOut = () => {
    
  }
  render() {
    const { user } = this.props;
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {user.taiKhoan}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <NavLink onClick={this.logOut} className="dropdown-item" to={"/"} >Logout</NavLink>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actLogin:user=>{
      dispatch(action.actLogin(user))
   }
  }
}

export default connect(null,mapDispatchToProps)(LoginSuccess)
