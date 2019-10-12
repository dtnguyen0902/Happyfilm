import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div>
                {/* Button trigger modal */}
                <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#modelLogin"
                >
                    Đăng nhập
  </button>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="modelLogin"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="modelTitleId"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Thông tin đăng nhập</h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor />
                                    <small id="helpId" className="text-muted">
                                        Tên đăng nhập{" "}
                                    </small>
                                    <input
                                        type="text"
                                        name
                                        id
                                        className="form-control"
                                        placeholder
                                        aria-describedby="helpId"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor />
                                    <small id="helpId" className="text-muted">
                                        Mật khẩu{" "}
                                    </small>
                                    <input
                                        type="text"
                                        name
                                        id
                                        className="form-control"
                                        placeholder
                                        aria-describedby="helpId"
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">
                                    Login
          </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}