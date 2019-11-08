import React, { Component } from 'react';
import Logo from "./logo";
import Signup from "./signup";
import Login from "./login";
import LoginSuccess from './LoginSuccess';
import _header from "../../SASS/Components/Header/_header.scss"
import { connect } from "react-redux";

class Header extends Component {
    render() {
        return (
            <div className="myHeader__bg container">
                <nav className="myHeader navbar navbar-expand-lg  d-flex justify-content-between">
                    <Logo />
                    <div className="row">
                        {
                            Object.entries(this.props.user).length < 1 ? (
                                <>
                                    <Login history={this.props.history} />
                                    <Signup />
                                </>
                            ) : (
                                    <LoginSuccess user={this.props.user} />
                                )
                        }
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.clientReducer.user
    }
}
export default connect(mapStateToProps, null)(Header)