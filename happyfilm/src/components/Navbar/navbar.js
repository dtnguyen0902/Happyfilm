import React, { Component } from "react";
import Search from "../header/search";
import _navbar from '../../SASS/Components/Navbar/_navbar.scss';

export default class Navbar extends Component {
    render() {
        return (
            <div className="mynavBg">
                <nav className="myNav navbar navbar-expand ">
                    <ul className="myNav__ul container navbar-nav">
                        <li className="myNav__li nav-item">
                            <a className="myNav__link nav-link" href="#">
                                MUA VÉ
                                </a>
                        </li>
                        <li className="nav-item">
                            <a className="myNav__link nav-link" href="#">
                                PHIM
                                </a>
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
                                GÓC ĐIỆN ẢNH
                                <ul className='gocDienAnh__ul'>
                                    <li className="gocDienAnh"><a>THỂ LOẠI PHIM</a></li>
                                    <li className="gocDienAnh"><a>PHIM HAY THÁNG</a></li>
                                    <li className="gocDienAnh"><a>BLOG ĐIỆN ẢNH</a></li>
                                    <li className="gocDienAnh"><a>BÌNH LUẬN PHIM</a></li>
                                </ul>
                                </a>
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
