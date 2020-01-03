import React, { Component, Fragment } from 'react';
import Footer from './footer';
import Footerinfo from'./footerinfo';

class ManagerFooter extends Component {
    render() {
        return (
            <Fragment>
                <Footer />
                <Footerinfo />
            </Fragment>
        );
    }
}

export default ManagerFooter;