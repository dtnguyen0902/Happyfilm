import React, { Component } from 'react';
import Header from '../header/header';
import Navbar from '../Navbar/navbar';
import ListCarousel from '../Carousel/ListCarousel';
import ListPhim from '../ListPhim/ListPhim';
import Sticker from '../IconSticker.js/Sticker';
import Branch from '../Branch-cinema/branch';
import Promotion from '../Promotion/promotion';
import DienAnh from '../News/DienAnh';
import ManagerFooter from '../Footer/ManagerFooter';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
                <ListCarousel />
                <ListPhim />
                <Sticker />
                <Branch />
                <Promotion />
                <DienAnh />
                <ManagerFooter />
            </div>
        );
    }
}

export default HomePage;