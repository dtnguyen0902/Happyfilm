import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class ChooseCinema extends Component {
    renderCinemaMovieTime = () => {
        const isCheckCinema = this.props.isChoosenCinema;
        let { CinemaMovie } = this.props;
        if (CinemaMovie.heThongRapChieu) {
            return CinemaMovie.heThongRapChieu.map((item, index) => {
                return (
                    <div key={index}>
                        <div className='row'>
                            <Fragment>{item.cumRapChieu.map((item, index) => {
                                if ((item.tenCumRap) === isCheckCinema) {
                                    return (
                                        <div className='' key={index}>
                                            <div className='row px-0 myCinemaBook'>
                                                {item.lichChieuPhim.map((item, index) => {
                                                    return (
                                                        <div className="card bg-dark" style={{ width: '4' }} key={index}>
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
                                }
                            })}
                            </Fragment>
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div>
                <ul className="nav nav-pills container myBranch" id="pills-tab" role="tablist">
                    <li className="nav-item myBranch">
                        <a className="nav-link active myBranch" id="pills-home-tab" data-toggle="pill" href="#chonPhim" role="tab" aria-controls="pills-home" aria-selected="true">CHỌN SUẤT</a>
                    </li>
                    {this.renderCinemaMovieTime()}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        CinemaMovie: state.ThongTinrapReducer.CinemaMovie
    }
}
export default connect(mapStateToProps, null)(ChooseCinema);