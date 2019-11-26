import React, { Component } from 'react';
import Logo from "./logo";
import Signup from "./signup";
import Login from "./login";
import LoginSuccess from './LoginSuccess';
import _header from "../../SASS/Components/Header/_header.scss"
import { connect } from "react-redux";
import { Spring, config } from 'react-spring/renderprops'
class Header extends Component {
    render() {
        return (
            <Spring
                from={{ number: 0 }} to={{ number: 100 }} config={config.slow}>
                {props => (<div style={{ width: props.number + "%"}}>
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
                </div>)}
            </Spring>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.clientReducer.user
    }
}
export default connect(mapStateToProps, null)(Header)