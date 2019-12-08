import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import ListBranch from '../Branch-cinema/ListBranch';
import { NavLink } from "react-router-dom";

class LichChieuCinema extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.detailCinema(nextProps.match.params.id)
            window.scrollTo(0, 0)
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailCinema(id);
        window.scrollTo(0, 0)
    }
    renderCinema = () => {
        return this.props.Cinema.map((item, index) => {
            return (
                <div key={index}>
                    <div className="card bg-dark container">
                        {item.lstCumRap.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className='row'>
                                        <div className='borderCinema'>
                                            <div className="card-body myCinemaBranch">
                                                <h5 className="card-title">{item.tenCumRap}</h5>
                                                <p className="card-text">Địa chỉ: {item.diaChi}</p>
                                            </div>
                                            <div>{item.danhSachPhim.map((item, index) => {
                                                return (
                                                    <div className='col-sm-12' key={index}>
                                                        <div className="card-body">
                                                            <h5 className="card-title myPhimCinema">{item.tenPhim}</h5>
                                                        </div>
                                                        <div className='row px-0 myCinemaBook'>
                                                            {item.lstLichChieuTheoPhim.map((item, index) => {
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
                        })}
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='myCinema container'>
                <div className='row'>
                    <div className='col-4 px-0'>
                        <ListBranch />
                    </div>
                    <div className='col-8'>
                        {this.renderCinema()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        detailCinema: id => {
            dispatch(action.actLichChieuRapAPI(id));
        }
    }
}
const mapStateToProps = state => {
    return {
        Cinema: state.ThongTinrapReducer.Cinema
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LichChieuCinema);