import React, { Component } from 'react';
import {  NavLink } from "react-router-dom";
import _footer from '../../SASS/Components/Footer/_footer.scss';
class Footerinfo extends Component {
    render() {
        return (
            <div className="myFooter">
                <div className="container">
                    <ul className="container navbar-nav footer">
                        <div className="row">
                            <div className="col-3">
                                <li className="nav-item footer">
                                    <NavLink className="nav-link" to='/ve-chung-toi'>
                                        VỀ CHÚNG TÔI</NavLink>
                                    <NavLink className="nav-link" to='/thoa-thuan-su-dung'>
                                        THỎA THUẬN SỬ DỤNG</NavLink>
                                    <NavLink className="nav-link" to='/quy-che-hoat-dong'>
                                        QUY CHẾ HOẠT ĐỘNG</NavLink>
                                    <NavLink className="nav-link" to='/chinh-sach-bao-mat'>
                                        CHÍNH SÁCH BẢO MẬT</NavLink>
                                </li>
                            </div>
                            <div className="col-3">
                                <li className="nav-item footer">
                                    <NavLink className="nav-link" to='the-loai-phim'>
                                        THỂ LOẠI PHIM</NavLink>
                                    <NavLink className="nav-link"  to='phim-hay-thang'>
                                        PHIM HAY THÁNG</NavLink>
                                    <NavLink className="nav-link"  to='blog-dien-anh'>
                                        BLOG ĐIỆN ẢNH</NavLink>
                                    <NavLink className="nav-link"  to='binh-luan-phim'>
                                        BÌNH LUẬN PHIM</NavLink>
                                </li>
                            </div>
                            <div className="col-3">
                                <li className="nav-item footer">
                                    <NavLink className="nav-link"  to='gop-y'>
                                        GÓP Ý</NavLink>
                                    <NavLink className="nav-link"  to='sale-service'>
                                        SALE & SERVICE</NavLink>
                                    <NavLink className="nav-link"  to='rap-gia-ve'>
                                        RẠP/GIÁ VÉ</NavLink>
                                </li>
                            </div>
                            <div className="col-3">
                                <li className="nav-item footer">
                                    <NavLink className="nav-link"  to='face-book'>
                                        <i className="fa fa-facebook" aria-hidden="true">&ensp;FACEBOOK</i></NavLink>
                                    <NavLink className="nav-link"  to='goo-gle'>
                                        <i className="fa fa-google" aria-hidden="true">&ensp;GOOGLE</i></NavLink>
                                    <NavLink className="nav-link"  to='insta-gram'>
                                        <i className="fa fa-instagram" aria-hidden="true">&ensp;INSTAGRAM</i></NavLink>
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