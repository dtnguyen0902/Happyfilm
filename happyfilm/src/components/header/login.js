import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">
                    ĐĂNG NHẬP
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModalScrollable" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h5 className="modal-title" id="exampleModalScrollableTitle">
                                    <img src="./img/logo.png" alt="First slide" width="50%" height="50%" className="rounded-circle" />
                                    <h3>ĐĂNG NHẬP</h3>
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div class="container">
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text fa fa-user" id="basic-addon1"></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Tài Khoản" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text fa fa-unlock-alt" id="basic-addon1"></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Mật Khẩu" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-groupmb-3">
                                                <input type="checkbox" className="form-control" placeholder="Ghi nhớ tài khoản" aria-label="Username" />Ghi nhớ tài khoản
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" class="btn btn-primary container">ĐĂNG NHẬP</button>
                                </div>
                                <div className="modal-footer py-0">
                                    <button type="button" class="btn container">Quên Mật Khẩu</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}