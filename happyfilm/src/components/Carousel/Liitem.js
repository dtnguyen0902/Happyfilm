import React, { Component } from 'react';

class Liitem extends Component {
    render() {
        let { carousel } = this.props;
        return (
            <div>
                <li id={carousel.maPhim}></li>
            </div>
        );
    }
}

export default Liitem;