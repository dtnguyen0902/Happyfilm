import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="bg-dark">
                <div className="container">
                    <nav className="navbar navbar-expand-lg ">
                        <ul className="container navbar-nav mx-auto d-flex justify-content-between">
                                <div className="col-3">
                                    <li className="nav-item">
                                        <h6 className="nav-link" href="#">
                                            GIỚI THIỆU
                                </h6>
                                    </li>
                                </div>
                                <div className="col-3">
                                    <li className="nav-item">
                                        <h6 className="nav-link" href="#">
                                            GÓC ĐIỆN ẢNH
                                </h6>
                                    </li>
                                </div>
                                <div className="col-3">
                                    <li className="nav-item">
                                        <h6 className="nav-link" href="#">
                                            HỖ TRỢ
                                </h6>
                                    </li>
                                </div>
                                <div className="col-3">
                                    <li className="nav-item">
                                        <h6 className="nav-link" href="#">
                                            KẾT NỐI
                                </h6>
                                    </li>
                                </div>
                            
                        </ul>

                    </nav>
                </div>
            </div>
        )
    }
}