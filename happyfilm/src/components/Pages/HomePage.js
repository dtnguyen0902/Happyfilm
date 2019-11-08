import React, { Component } from 'react';
import ListCarousel from '../Carousel/ListCarousel';
import ListPhim from '../ListPhim/ListPhim';
import Sticker from '../IconSticker.js/Sticker';
import Promotion from '../Promotion/promotion';
import Header from '../header/header';
import Navbar from '../Navbar/navbar';
class HomePage extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                
                <ListCarousel />
                <ListPhim />
                <Sticker />
                <Promotion />
            </div>
        );
    }
}

export default HomePage;