import React, { Component } from 'react';
import Modal from '../../components/Admin/Modal';
class quanlyUser extends Component {
    render() {
        return (
            <div className="page-content p-2 container" id="content">
            <div className="display-4 text-center">LIST USERS</div>
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearch}/>
                </form>
            </nav>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable" >ADD USER</button>
            <Modal />
            <table className="table">
                <thead>
                    <tr className="d-flex">
                        <th className="col-1">STT</th>
                        <th className="col-2">Name</th>
                        <th className="col-2">Username</th>
                        <th className="col-2">Phone number</th>
                        <th className="col-3">Email</th>
                        <th className="col-1">Function</th>
                        <th className="col-1">Function</th>
                    </tr>
                </thead>
                <tbody>
                <tr className="d-flex row">
                   
                    <td className="col-2"></td>
                    <td className="col-2"></td>
                    <td className="col-2"></td>
                    <td className="col-3"></td>
                    <td className="col-1">
                        <button className="btn btn-outline-danger">Xóa</button>
                    </td>
                    <td className="col-1">
                        <button className="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModalScrollable" >Sửa</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default quanlyUser;