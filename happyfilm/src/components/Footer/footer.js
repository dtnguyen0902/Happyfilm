import React, { Component } from "react";
import _footer from '../../SASS/Components/Footer/_footer.scss';
export default class Footer extends Component {
    render() {
        return (
            <div className="myFooter">
                <div className="container px-0">
                    <nav className="navbar navbar-expand-lg px-0 ">
                        <ul className="container navbar-nav mx-auto d-flex justify-content-between">
                            <div className="col-3">
                                <li className="nav-item">
                                    <h6 className="nav-link px-0" href="#">
                                        GIỚI THIỆU
                                </h6>
                                </li>
                            </div>
                            <div className="col-3">
                                <li className="nav-item">
                                    <h6 className="nav-link px-0" href="#">
                                        GÓC ĐIỆN ẢNH
                                </h6>
                                </li>
                            </div>
                            <div className="col-3">
                                <li className="nav-item">
                                    <h6 className="nav-link px-0" href="#">
                                        HỖ TRỢ
                                </h6>
                                </li>
                            </div>
                            <div className="col-3">
                                <li className="nav-item">
                                    <h6 className="nav-link px-0" href="#">
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