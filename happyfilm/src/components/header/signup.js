import React, { Component } from 'react';
import *as  action from './../../redux/action/Action';
import _button from '../../SASS/Function/_button.scss';
import {NavLink} from 'react-router-dom';
import HomePage from './../Pages/HomePage'
import { connect } from 'react-redux';
 class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            taiKhoan:"",
            matKhau:"",
            email:"",
            soDt:"",
            maNhom:"GP04",
            maLoaiNguoiDung:"KhachHang",
            hoTen:""
        }
    }
    

    handleOnChange=event=>{
        let{name,value}=event.target;

        this.setState({
            [name]:value
        })
    }

    handleOnSubmit = (event) => {
        console.log(event)
        event.preventDefault();
        console.log(this.state)
    //    this.props.onSubmit(this.state);
         this.props.signUp(this.state)
       console.log(12121212);


    }


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
                            </div>
                            <div className="modal-body">
                                <div class="container">
                                    <form onSubmit={this.handleOnSubmit}>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <input type="text"  name="taiKhoan" className="form-control" onChange={this.handleOnChange} placeholder="Tài Khoản" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <div className="input-group mb-3 w-100">
                                                        <input type="password" name="matKhau" className="form-control" onChange={this.handleOnChange} placeholder="Mật khẩu" aria-describedby="basic-addon1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <div className="input-group mb-3 w-100">
                                                        <input type="password" className="form-control" placeholder="Xác nhận mật khẩu" aria-describedby="basic-addon1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <input type="text" name="hoTen" className="form-control" placeholder="Họ tên" onChange={this.handleOnChange} aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <div className="input-group mb-3 w-100">
                                                        <input type="text" name="soDt" className="form-control" onChange={this.handleOnChange} placeholder="Số điện thoại" aria-describedby="basic-addon1" />
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
                                                <input type="text" name="email" className="form-control" onChange={this.handleOnChange} placeholder="Email" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group mb-3 w-100">
                                                <input type="text" name="diaChi" className="form-control" onChange={this.handleOnChange} placeholder="Địa chỉ" aria-describedby="basic-addon1" />
                                            </div>
                                        </div>
                                        <span>Tôi đã đọc và đồng ý CHÍNH SÁCH của chương trình</span>
                                    </div>
                                    <div className="modal-footer">
                                <button type="submit" class="btn btn-warning container">ĐĂNG KÝ</button>
                            </div>
                                    </form>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }

 }
const mapDispatchToProps=dispatch=>{
    return{
        signUp:user=>{
            dispatch(action.actsingUp(user))
        }
    }
}
 

export default connect(null,mapDispatchToProps)(Signup);