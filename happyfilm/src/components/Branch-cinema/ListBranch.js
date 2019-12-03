import React, { Component,Fragment } from 'react';
import Branch from './branch';
import ListPhimSearch from '../ListPhim/ListPhimSearch';
import __myBranch from '../../SASS/Components/Branch/__myBranch.scss';
import ChooseCinema from '../ListPhim/ChooseCinema';
class ListBranch extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Fragment>
                <Fragment>
                    <ul className="nav nav-pills container myBranch" id="pills-tab" role="tablist">
                        <li className="nav-item myBranch">
                            <a className="nav-link active myBranch" id="pills-home-tab" data-toggle="pill" href="#chonPhim" role="tab" aria-controls="pills-home" aria-selected="true">THEO PHIM</a>
                        </li>
                        <li className="nav-item myBranch">
                            <a className="nav-link myBranch" id="pills-profile-tab" data-toggle="pill" href="#chonRap" role="tab" aria-controls="pills-profile" aria-selected="false" name='PHIM SẮP CHIẾU'>THEO RẠP</a>
                        </li>
                    </ul>
                </Fragment>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="chonPhim" role="tabpanel" aria-labelledby="pills-home-tab">
                        <ListPhimSearch />
                    </div>
                    <div className="tab-pane fade" id="chonRap" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <Branch />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ListBranch;