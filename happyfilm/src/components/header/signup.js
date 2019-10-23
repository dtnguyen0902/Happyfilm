import React, { Component } from 'react';
import _button from '../../SASS/Function/_button.scss';
export default class Signup extends Component {
    render() {
        return (
            <div>
                {/* Button trigger modal */}
                <button type="button" className="myButton" data-toggle="modal" data-target="#mySignUp">
                    ĐĂNG KÝ
                </button>
                {/* Modal */}
                <div className="modal fade" id="mySignUp" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h5 className="modal-title" id="exampleModalScrollableTitle">
                                    <img src="./img/logo_happyfilm_nobg.png" alt="First slide" width="20%" height="20%" className="rounded-circle" />
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"></i></span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div class="container">
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <input type="text" className="form-control" placeholder="Tài Khoản" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <div className="input-group mb-3 w-100">
                                                        <input type="text" className="form-control" placeholder="Mật khẩu" aria-describedby="basic-addon1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <div className="input-group mb-3 w-100">
                                                        <input type="text" className="form-control" placeholder="Xác nhận mật khẩu" aria-describedby="basic-addon1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <input type="text" className="form-control" placeholder="Họ tên" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <div className="input-group mb-3 w-100">
                                                        <input type="text" className="form-control" placeholder="Số điện thoại" aria-describedby="basic-addon1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div class="form-group">
                                                    <select class="custom-select" name="" id="gioitinh">
                                                        <option selected>Chọn giới tính</option>
                                                        <option>Nam</option>
                                                        <option>Nữ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <input type="text" className="form-control" placeholder="Email" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <input type="text" className="form-control" placeholder="Địa chỉ" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <span>Tôi đã đọc và đồng ý CHÍNH SÁCH của chương trình</span>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" class="btn btn-warning container">ĐĂNG KÝ</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}