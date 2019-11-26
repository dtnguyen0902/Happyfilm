import React, { Component } from "react";
import _carousel from '../../SASS/Components/Carousel/_carousel.scss'
import SearchPhim from "./Form/SearchPhim";

class ListCarousel extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div id="myCarousel" className="myCarousel carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item ">
                        <img src="./img/banner-2048x682_1572600297999.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/psm-ss-2048x682_1572851614726.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="./img/dr-ss-2048x682_1573034520974.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item active">
                        <img src="./img/haloween.jpg" className="d-block w-100" alt="..." />
                    </div>

                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <SearchPhim />
            </div>
        )
    }
}


export default (ListCarousel);