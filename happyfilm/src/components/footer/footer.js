import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-sm-3">
                        <h4>Giới Thiệu</h4>
                        <p>HappyFilm</p>
                        <p>website: happyfilm.vn</p>
                    </div>
                    <div className="col-sm-3">
                        <h4>Chính Sách</h4>
                        <p>Thỏa thuận sử dụng</p>
                        <p>Quy chế hoạt động</p>
                        <p>Chính sách bảo mật</p>
                        <p>Quyền lợi thành viên</p>
                    </div>
                    <div className="col-sm-3">
                        <h4>Đối tác</h4>
                        <a href="https://www.cgv.vn/" target="_blank">
                            <img style={{ width: 50 }} src="../img/logo_cgv.png" alt />
                        </a>
                        <a href="https://www.galaxycine.vn/" target="_blank">
                            <img style={{ width: 50 }} src="../img/logo_galaxy.jpg" alt />
                        </a>
                    </div>
                    <div className="col-sm-3 ">
                        <h4>Thông tin liên hệ</h4>
                        <p>Địa chỉ: 459 Sư Vạn Hạnh, quận 10, Tp.HCM</p>
                        <p>Điện thoại: 028.12345678</p>
                        <p>Hoạt động 24/7</p>
                    </div>
                </div>
            </div>
        )
    }
}