import React, { Component } from 'react';

class Footerinfo extends Component {
    render() {
        return (
            <div>
                <div className="bg-dark">
                    <div className="container">
                        <ul className="container navbar-nav">
                            <div className="row">
                                <div className="col-3">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            VỀ CHÚNG TÔI</a>
                                        <a className="nav-link" href="#">
                                            THỎA THUẬN SỬ DỤNG</a>
                                        <a className="nav-link" href="#">
                                            QUY CHẾ HOẠT ĐỘNG</a>
                                        <a className="nav-link" href="#">
                                            CHÍNH SÁCH BẢO MẬT</a>
                                    </li>
                                </div>
                                <div className="col-3">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            THỂ LOẠI PHIM</a>
                                        <a className="nav-link" href="#">
                                            PHIM HAY THÁNG</a>
                                        <a className="nav-link" href="#">
                                            BLOG ĐIỆN ẢNH</a>
                                        <a className="nav-link" href="#">
                                            BÌNH LUẬN PHIM</a>
                                    </li>
                                </div>
                                <div className="col-3">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            GÓP Ý</a>
                                        <a className="nav-link" href="#">
                                            SALE & SERVICE</a>
                                        <a className="nav-link" href="#">
                                            RẠP/GIÁ VÉ</a>
                                    </li>
                                </div>
                                <div className="col-3">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <i class="fa fa-facebook" aria-hidden="true"></i></a>
                                        <a className="nav-link" href="#">
                                            <i class="fa fa-google" aria-hidden="true"></i></a>
                                            <a className="nav-link" href="#">
                                            <i class="fa fa-instagram" aria-hidden="true"></i></a>
                                    </li>
                                </div>
                                </div>
                        </ul>
                    </div>
                    </div>
                </div>
                );
            }
        }
        
export default Footerinfo;