import React, { Component } from 'react';
import Branch from './branch';
import ListPhimSearch from '../ListPhim/ListPhimSearch';

class ListBranch extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#chonPhim" role="tab" aria-controls="pills-home" aria-selected="true">CHỌN PHIM</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#chonRap" role="tab" aria-controls="pills-profile" aria-selected="false" name='PHIM SẮP CHIẾU'>CHỌN RẠP</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="chonPhim" role="tabpanel" aria-labelledby="pills-home-tab">
                        <ListPhimSearch />
                    </div>
                    <div className="tab-pane fade" id="chonRap" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Branch />
                    </div>
                </div>
            </div>
        );
    }
}

export default ListBranch;