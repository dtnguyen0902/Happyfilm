import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return (
            <div className='row align-items-center'>
                <div>
                    <a className="navbar-brand" href="#">
                        <img
                            style={{ width: 40 }} className="navbar-brand" src="../img/logo_happyfilm_nobg.png"
                        />
                    </a>
                </div>
                <div>
                    <h3>HAPPY FILM</h3>
                </div>

            </div>

        )
    }
}
