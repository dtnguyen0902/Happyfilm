import React, { Component } from 'react';
import ListCarousel from '../Carousel/ListCarousel';
import ListPhim from '../ListPhim/ListPhim';
import Promotion from '../Promotion/promotion';
import AboutHappyFilm from '../About/AboutHappyFilm';

class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <ListCarousel />
                <ListPhim />
                <Promotion />
                <AboutHappyFilm />
            </div>
        );
    }
}

export default HomePage;