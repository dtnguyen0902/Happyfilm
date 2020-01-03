import React, { Component,Fragment } from 'react';
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
            <Fragment>
                <ListCarousel />
                <ListPhim />
                <Promotion />
                <AboutHappyFilm />
            </Fragment>
        );
    }
}

export default HomePage;