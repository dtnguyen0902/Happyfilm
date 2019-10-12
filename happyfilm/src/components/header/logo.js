import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div>
                <a className="navbar-brand" href="#">
                    <img
                        style={{ width: 60 }}
                        className="navbar-brand"
                        src="../img/logo.png"
                        alt
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
            </div>

        )
    }
}
