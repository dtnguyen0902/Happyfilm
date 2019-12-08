import React, { Component } from 'react'
import { connect } from 'react-redux'
import *as  action from '../../redux/action/Action';

class LoginSuccess extends Component {

  logOut = () => {
    localStorage.clear();
    window.location.href = '/';
  }
  render() {
    const { user } = this.props;
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hello: {user.taiKhoan}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <button className="dropdown-item">Cập nhật thông tin</button>
          <button className="dropdown-item">Thay đổi mật khẩu</button>
          <button onClick={this.logOut} className="dropdown-item">Logout</button>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actLogin: user => {
      dispatch(action.actLogin(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginSuccess)
