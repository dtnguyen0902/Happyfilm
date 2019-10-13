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
                                    <img src="./img/logo_happyfilm_nobg.png" alt="First slide" width="50%" height="50%" className="rounded-circle" />
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><i className="fa fa-times-circle btn btn-info" aria-hidden="true"></i></span>
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
                                                <input type="text" className="form-control" placeholder="Tài Khoản" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text fa fa-unlock-alt" id="basic-addon1"></span>
                                                </div>
                                                <input type="text" className="form-control" placeholder="Mật Khẩu" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                        <div className="input-group mb-3 w-100">
                                            <span class="chkbox">
                                                <input class="ipt ok" data-val="true" id="IsNewsLetter" name="IsNewsLetter" tabindex="3" type="checkbox" value="true" />
                                                <input name="IsNewsLetter" type="hidden" value="false" />
                                                <label for="IsNewsLetter w-100">Ghi nhớ tài khoản</label>
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="modal-footer py-0">
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