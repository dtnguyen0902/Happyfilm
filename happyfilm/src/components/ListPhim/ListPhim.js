import React, { Component } from 'react';
import PhimItems from './PhimItems';
import MoreInfoFilm from './MoreInfoFilm';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";


class ListPhim extends Component {

    renderSource = () => {
        let { ListFilms } = this.props;
        return ListFilms.map((item, index) => {
            if (index < 8) {
                return (
                    <PhimItems key={index} movie={item} />
                )
            }
        })
    }
    componentDidMount() {
        this.props.layDuLieu();
    }
    render() {
        return (
            <div className="container">
                <ul className="nav nav-pills mb-3 myBranchForm" id="pills-tab" role="tablist">
                    <li className="nav-item myBranchForm">
                        <a className="nav-link active myBranchForm" id="pills-home-tab" data-toggle="pill" href="#phimDangChieu" role="tab" aria-controls="pills-home" aria-selected="true">PHIM ĐANG CHIẾU</a>
                    </li>
                    <li className="nav-item myBranchForm">
                        <a className="nav-link myBranchForm" id="pills-profile-tab" data-toggle="pill" href="#phimSapChieu" role="tab" aria-controls="pills-profile" aria-selected="false" name='PHIM SẮP CHIẾU'>PHIM SẮP CHIẾU</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="phimDangChieu" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div className='row'>
                            {this.renderSource()}
                        </div>
                    </div>
                    <div className="tab-pane fade" id="phimSapChieu" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div className='row'>
                            {this.renderSource()}
                        </div>
                    </div>
                </div>
                <MoreInfoFilm className="d-flex justify-content-end" />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        layDuLieu: () => {
            dispatch(action.actOnListMovieAPI())
        }
    }
}
const mapStateToProps = state => {
    return {
        ListFilms: state.movieReducer.ListFilms
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPhim);