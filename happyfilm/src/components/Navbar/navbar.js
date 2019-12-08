import React, { Component, Fragment } from "react";

import Search from "../header/search";
import { NavLink } from "react-router-dom";
import _navbar from '../../SASS/Components/Navbar/_navbar.scss';
import ListCarouselNavbar from "../Carousel/ListCarouselNavbar";

export default class Navbar extends Component {
    render() {
        return (
                <div className="mynavBg">
                    <nav className="myNav navbar navbar-expand">
                        <ul className="myNav__ul container navbar-nav">
                            <li className="myNav__li nav-item">
                                <NavLink className="myNav__link nav-link" to={`${'/danh-sach-phim'}`}>
                                    MUA VÉ
                            </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="myNav__link nav-link" href="#">
                                    PHIM
                            </a>
                                <ul className='dropdown carouselNavbar'>
                                    <li><a className='carouselNavbar'>PHIM ĐANG CHIẾU</a></li>
                                    <li>
                                        <a className='row carouselNavbar'><ListCarouselNavbar /></a>
                                    </li>
                                    <li><a className='carouselNavbar'>PHIM SẮP CHIẾU</a></li>
                                    <li>
                                        <a className='row carouselNavbar'><ListCarouselNavbar /></a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="myNav__link nav-link" href="#">
                                    LỊCH CHIẾU
                            </a>
                            </li>
                            <li className="nav-item">
                                <a className="myNav__link nav-link" href="#">
                                    RẠP/GIÁ VÉ
                            </a>
                            </li>
                            <li className="nav-item">
                                <a className="myNav__link nav-link" href="#">
                                    ƯU ĐÃI
                            </a>
                            </li>
                            <li className="nav-item">
                                <a className="myNav__link dienAnh nav-link" href="#">
                                    GÓC ĐIỆN ẢNH</a>
                            </li>
                            <li className="nav-item">
                                <a className="myNav__link nav-link" href="#">
                                    <Search />
                            </a>
                            </li>
                        </ul>
                    </nav>
                    
                </div>
        )
    }
}
