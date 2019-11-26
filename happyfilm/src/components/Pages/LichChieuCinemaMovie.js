import React, { Component } from 'react';
import ListBranch from '../Branch-cinema/ListBranch';
import * as action from '../../redux/action/Action';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class LichChieuCinemaMovie extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.detailCinemaMovie(nextProps.match.params.id)
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailCinemaMovie(id);
        window.scrollTo(0, 0)
    }
    renderCinemaMovie = () => {
        let { CinemaMovie } = this.props;
        if (CinemaMovie.heThongRapChieu) {
            return CinemaMovie.heThongRapChieu.map((item, index) => {
                return (
                    <div key={index}>
                        <div className='row'>
                            <div className='borderCinema'>
                                <div className="card-body myCinemaBranch">
                                    <h5 className='card-tilte'>{item.maHeThongRap}</h5>
                                </div>
                                <div>{item.cumRapChieu.map((item, index) => {
                                    return (
                                        <div className='col-sm-12' key={index}>
                                            <div className="card-body">
                                                <h5 className="card-title myPhimCinemaMovie">{item.tenCumRap}</h5>
                                            </div>
                                            <div className='row px-0 myCinemaBook'>
                                                {item.lichChieuPhim.map((item, index) => {
                                                    return (
                                                        <div className="card bg-dark" style={{ width: '8' }} key={index}>
                                                            <NavLink className="card-body px-2 py-2 bookVe" to={`/danh-sach-cho-ngoi/${item.maLichChieu}`}>
                                                                <p className="card-title">{new Date(item.ngayChieuGioChieu).toLocaleDateString('en-GB')}</p>
                                                                <p className="card-title">{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</p>
                                                            </NavLink>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div className='myCinema container'>
                <div className='row'>
                    <div className='col-4 px-0'>
                        <ListBranch />
                    </div>
                    <div className='col-8'>
                        {this.renderCinemaMovie()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        detailCinemaMovie: id => {
            dispatch(action.actLichChieuPhimAPI(id));
        }
    }
}
const mapStateToProps = state => {
    return {
        CinemaMovie: state.ThongTinrapReducer.CinemaMovie
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LichChieuCinemaMovie);