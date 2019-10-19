import React, { Component } from 'react';
import Footer from './footer';
import Footerinfo from'./footerinfo';

class ManagerFooter extends Component {
    render() {
        return (
            <div>
                <Footer />
                <Footerinfo />
            </div>
        );
    }
}

export default ManagerFooter;