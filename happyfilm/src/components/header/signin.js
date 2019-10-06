import React, { Component } from "react";

export default class Signin extends Component {
    render() {
        return (
            <div>
                {/* Button trigger modal */}
                <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#modelSignIn"
                >
                    Đăng ký
  </button>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="modelSignIn"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="modelTitleId"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Thông tin đăng ký</h5>
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
                                <div className="form-group">
                                    <label htmlFor />
                                    <small id="helpId" className="text-muted">
                                        Email{" "}
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
                                <button type="button" className="btn btn-danger" data-dismiss="modal">
                                    Hủy
          </button>
                                <button type="button" className="btn btn-primary">
                                    Lưu
          </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}