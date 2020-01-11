import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class NavAdmin extends Component {
    render() {
    
        return (
            <div className="col-2">
                < div className="vertical-nav bg-dark text-white" id="sidebar" >
                    <div className="py-4 px-3 mb-4 bg-dark text-white">
                        <NavLink to="/admin/dashboard" className="media d-flex align-items-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width={65} className="mr-3 rounded-circle img-thumbnail shadow-sm" />
                        </NavLink>
                        <div className="media-body">
                            <h4 className="m-0">{user.hoTen}</h4>
                            <p className="font-weight-light text-muted mb-0">Web Developer</p>
                        </div>
                    </div>
                    <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Main</p>
                    <ul className="nav flex-column  mb-0">
                        <li className="nav-item ">
                            <NavLink to="/admin/handle-users" ><span className="nav-link text-white font-italic bg-dark">USERS CONTROL</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/handle-films">
                                <span className="nav-link text-white font-italic bg-dark" href="#" data-toggle="collapse">FILM CONTROL</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <button id="sidebarCollapse"  type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2" /><small className="text-uppercase font-weight-bold">Toggle</small></button>
            </div>
        );
    }
}
export default NavAdmin;