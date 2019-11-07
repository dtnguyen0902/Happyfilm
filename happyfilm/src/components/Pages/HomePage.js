import React, { Component } from 'react';
import ListCarousel from '../Carousel/ListCarousel';
import ListPhim from '../ListPhim/ListPhim';
import Sticker from '../IconSticker.js/Sticker';
import Branch from '../Branch-cinema/branch';
import Promotion from '../Promotion/promotion';
import DienAnh from '../News/DienAnh';

class HomePage extends Component {
    render() {
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