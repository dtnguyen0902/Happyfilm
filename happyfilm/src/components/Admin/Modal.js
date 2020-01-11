import React, { Component } from "react";

class Modal extends Component {
  
 
  render() {
    return (
      <div className="modal fade" id="exampleModalScrollable" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
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
              <form >
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="hoTen"  />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="taiKhoan"/>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="text" className="form-control" name="matKhau"  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email"  />
                </div>
                <div className="form-group">  
                  <label>Phone Number</label>
                  <input type="number" className="form-control" name="soDt" />
                </div>
                <div className="form-group">
                  <label>Group number</label>
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
                  <label>Type</label>
                  <select className="form-control" name="maLoaiNguoiDung">
                    <option>KhachHang</option>
                    <option>QuanTri</option>
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
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.userEdit) {
      this.props.onUpdate(this.state);
    } else {
      this.props.onAdd(this.state);
    }
  }
}


export default Modal;
