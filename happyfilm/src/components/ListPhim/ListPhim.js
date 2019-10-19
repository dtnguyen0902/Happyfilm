import React, { Component } from 'react';
import PhimItems from './PhimItems';
import MoreInfoFilm from './MoreInfoFilm';
class ListPhim extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#phimDangChieu" role="tab" aria-controls="pills-home" aria-selected="true">PHIM ĐANG CHIẾU</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#phimSapChieu" role="tab" aria-controls="pills-profile" aria-selected="false">PHIM SẮP CHIẾU</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="phimDangChieu" role="tabpanel" aria-labelledby="pills-home-tab">
                        <PhimItems />
                    </div>
                    <div className="tab-pane fade" id="phimSapChieu" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <PhimItems />
                    </div>
                </div>
                <MoreInfoFilm className="d-flex justify-content-end" />
            </div>
        );
    }
}

export default ListPhim;