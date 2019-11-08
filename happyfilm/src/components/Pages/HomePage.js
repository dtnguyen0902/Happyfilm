import React, { Component } from 'react';
import ListCarousel from '../Carousel/ListCarousel';
import ListPhim from '../ListPhim/ListPhim';
import Sticker from '../IconSticker.js/Sticker';
import Branch from '../Branch-cinema/branch';
import Promotion from '../Promotion/promotion';
import DienAnh from '../News/DienAnh';

class HomePage extends Component {
    
    render() {
    console.log('homepage', this.props);
        return (
            <div>
<<<<<<< HEAD
                <Header {...this.props}/>
                <Navbar />
=======
>>>>>>> 6c2f398291e05d18d6ca35ab371f1095ce281d49
                <ListCarousel />
                <ListPhim />
                <Sticker />
                <Promotion />
            </div>
        );
    }
}

export default HomePage;