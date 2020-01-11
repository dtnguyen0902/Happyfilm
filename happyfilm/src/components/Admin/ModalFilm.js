import React, { Component } from 'react';

class ModalFilm extends Component {
    
   
    render() {
        return (
            <div className="modal fade" id="phimModal" tabIndex={-1} role="dialog" aria-labelledby="phimModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title"></h5>
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
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Mã Phim</label>
                                    <input type="text" className="form-control" name="maPhim" />
                                </div>
                                <div className="form-group">
                                    <label>Tên Phim</label>
                                    <input type="text" className="form-control" name="tenPhim" />
                                </div>
                                <div className="form-group">
                                    <label>Bí danh</label>
                                    <input type="text" className="form-control" name="biDanh" />
                                </div>
                                <div className="form-group">
                                    <label>Trailer</label>
                                    <input type="text" className="form-control" name="trailer" />
                                </div>
                                <div className="form-group">
                                    <label>Hình Ảnh</label>
                                    <input type="text" className="form-control" name="hinhAnh" />
                                </div>
                                <div className="form-group">
                                    <label>Mô Tả</label>
                                    <textarea type="message" className="form-control" style={{ height: 100 }} name="moTa" />

                                </div>
                                <div className="form-group">
                                    <label>Mã Nhóm</label>
                                    <select className="form-control" name="maNhom" >
                                        <option>GP01</option>
                                        <option>GP02</option>
                                        <option>GP03</option>
                                        <option>GP04</option>
                                        <option>GP05</option>
                                        <option>GP06</option>
                                        <option>GP07</option>
                                        <option>GP08</option>
                                        <option>GP09</option>
                                        <option>GP10</option>
                                        <option>GP11</option>
                                        <option>GP12</option>
                                        <option>GP13</option>
                                        <option>GP14</option>
                                        <option>GP15</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Ngày khởi chiếu</label>
                                    <input type="text" className="form-control" name="ngayKhoiChieu" />
                                </div>
                                <div className="form-group">
                                    <label>Đánh giá</label>
                                    <select type="number" className="form-control" name="danhGia" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-success" >
                                    Submit
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalFilm;