import React, { Component } from 'react'
import {NavLink}  from "react-router-dom";
class LoginSuccess extends Component {
   

    render() {
      const {user}=this.props;
        return (
         <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {user.taiKhoan}
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
 
    <NavLink className="dropdown-item" to={"/"} >Logout</NavLink>
  </div>
</div>

        )
    }
}

export default LoginSuccess
