import React, { Component } from 'react';
import ModalFilm from '../../components/Admin/ModalFilm';
class quanLyFilm extends Component {
    render() {
        return (
            <div>
            <div className="display-4 lead text-center">LIST FILMS</div>
            <button className="btn btn-success mr-2" data-toggle="modal" data-target="#phimModal" >ADD FILM</button>
            <ModalFilm/>
            <input type="text" />
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Logo</th>
                        <th>Description</th>
                        <th>Function</th>
                        <th>Function</th>
                    </tr>
                </thead>
                <tbody>
                <tr >
                    <td></td>
                    <td>Ten Phim</td>
                    <td><img className="img img-fluid" src="" alt="" /></td>
                    <td></td>
                    <td>
                        <button className="btn btn-outline-danger">Xóa</button>
                    </td>
                    <td>
                        <button className="btn btn-outline-success" data-target="#phimModal"data-toggle="modal"  >Sửa</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default quanLyFilm;