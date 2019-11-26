
import React, { Component } from 'react';
import _button from '../../SASS/Function/_button.scss';
import * as action from './../../redux/action/Action';
import { connect } from 'react-redux';
import LoginSuccess from './LoginSuccess';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: ""
        }
    }
    componentDidMount() {

    }
    handleOnChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.login(this.state);
        
    }
    render() {
        return (
            <div>
                <button type="button" className="myButton" data-toggle="modal" data-target="#myLogin">
                    ĐĂNG NHẬP
                    </button>
                <div className="modal fade" id="myLogin" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content myModal">
                            <div className="modal-header text-center">
                                <h5 className="modal-title">
                                    <img src="./img/logo_happyfilm_nobg.png" alt="First slide" width="20%" height="20%" className="rounded-circle" />
                                </h5>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <form onSubmit={this.handleOnSubmit}>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <div className="input-group mb-3 w-100">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text fa fa-user" id="basic-addon1"></span>
                                                    </div>
                                                    <input type="text" name="taiKhoan" className="form-control" onChange={this.handleOnChange} placeholder="Tài Khoản" aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3 w-100">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text fa fa-unlock-alt" id="basic-addon1"></span>
                                                    </div>
                                                    <input type="password" name="matKhau" className="form-control" onChange={this.handleOnChange} placeholder="Mật Khẩu" aria-describedby="basic-addon1" autoComplete="new-password"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-body py-0">
                                            <button type="button" className="btn container">Quên Mật Khẩu</button>
                                        </div>
                                        <div className="modal-footer">
                                            {/* <NavLink type="submit" className="btn btn-primary container" to={"/homepage-login"}>ĐĂNG NHẬP</NavLink> */}
                                            <button type="submit" className="btn btn-primary container">ĐĂNG NHẬP</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => {
            dispatch(action.actLogin(user));
        }
    }
};

export default connect(null, mapDispatchToProps)(Login);