import React, { Component } from 'react';
import _footer from '../../SASS/Components/Footer/_footer.scss';
class Footerinfo extends Component {
    render() {
        return (
            <div className="myFooter">
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
                                        <i class="fa fa-facebook" aria-hidden="true">FACEBOOK</i></a>
                                    <a className="nav-link" href="#">
                                        <i class="fa fa-google" aria-hidden="true"> GOOGLE</i></a>
                                    <a className="nav-link" href="#">
                                        <i class="fa fa-instagram" aria-hidden="true">INSTAGRAM</i></a>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footerinfo;