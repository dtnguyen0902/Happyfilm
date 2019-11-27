import React, { Component } from 'react';
import ListCarousel from '../Carousel/ListCarousel';
import ListPhim from '../ListPhim/ListPhim';
import Sticker from '../IconSticker.js/Sticker';
import Promotion from '../Promotion/promotion';

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
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