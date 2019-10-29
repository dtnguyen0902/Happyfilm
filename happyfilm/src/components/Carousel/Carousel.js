import React, { Component } from 'react';

class Carousel extends Component {

    render() {
        let { carousel } = this.props;
        return (
            <div className="w-100" href={carousel.maPhim}>
                <img src="./img/haloween.jpg"/>
            </div> 
        );
    }
}

export default Carousel;