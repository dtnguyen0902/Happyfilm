import React, { Component } from 'react';
import _button from '../../SASS/Function/_button.scss';
export default class Login extends Component {
    render() {
        return (
            <div>
                <button type="button" className="myButton" data-toggle="modal" data-target="#myLogin">
                    ĐĂNG NHẬP
                </button>
                {/* Modal */}
                <div className="modal fade" id="myLogin" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h5 className="modal-title">
                                    <img src="./img/logo_happyfilm_nobg.png" alt="First slide" width="20%" height="20%" className="rounded-circle" />
                                </h5>
                            </div>
                            <div className="container">
                                <div className="modal-body">
                                    <span className="text-justify">Vui lòng đăng nhập trước khi mua vé để tích lũy điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên của HAPPY FILM.</span>
                                </div>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text fa fa-user" id="basic-addon1"></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Tài Khoản" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text fa fa-unlock-alt" id="basic-addon1"></span>
                                                </div>
                                                <input type="password" className="form-control" placeholder="Mật Khẩu" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body py-0">
                                <button type="button" class="btn container">Quên Mật Khẩu</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn btn-primary container">ĐĂNG NHẬP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}