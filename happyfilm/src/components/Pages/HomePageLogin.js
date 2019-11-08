import React, { Component } from 'react';
import HeaderLogin from '../header/headerlogin';
import Navbar from '../Navbar/navbar';
import ListCarousel from '../Carousel/ListCarousel';
import ListPhim from '../ListPhim/ListPhim';
import Sticker from '../IconSticker.js/Sticker';
import Branch from '../Branch-cinema/branch';
import Promotion from '../Promotion/promotion';
import DienAnh from '../News/DienAnh';
import ManagerFooter from '../Footer/ManagerFooter';

class HomePageLogin extends Component {
    render() {
        return (
            <div>
                <HeaderLogin />
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

export default HomePageLogin;