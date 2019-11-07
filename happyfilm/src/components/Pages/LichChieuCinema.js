import React, { Component, Fragment } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import ListCarousel from '../Carousel/ListCarousel';
import Branch from '../Branch-cinema/branch';
import ListPhim from '../ListPhim/ListPhim';
import Promotion from '../Promotion/promotion';
import DienAnh from '../News/DienAnh';
import LocationCinema from './LocationCinema';
import _phimitems from '../../SASS/Components/Listphim/_phimitems.scss';

class LichChieuCinema extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.detailCinema(nextProps.match.params.id)
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailCinema(id);
        console.log(this.props.history)
    }
    renderCinema = () => {
        return this.props.Cinema.map((item, index) => {
            return (
                <Fragment key={index}>
                    <Fragment className="card bg-dark container">
                        {item.lstCumRap.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className='row'>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.tenCumRap}</h5>
                                            <p className="card-text">{item.diaChi}</p>
                                        </div>
                                        <div>{item.danhSachPhim.map((item, index) => {
                                            return (
                                                <div className='col-sm-12' key={index}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.tenPhim}</h5>
                                                    </div>
                                                    <div className='row mx-0 px-0 myCinema'>
                                                        {item.lstLichChieuTheoPhim.map((item, index) => {
                                                            return (
                                                                <div className="card bg-dark myCinema" style={{ width: '8' }} key={index}>
                                                                    <div className="card-body px-2 py-2">
                                                                        <p className="card-title">{new Date(item.ngayChieuGioChieu).toLocaleDateString('en-GB')}</p>
                                                                        <p className="card-title">{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</p>
                                                                    </div>
                                                                </div>
                                                                // <div></div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </Fragment>
                </Fragment>
            )
        })
    }
    render() {
        return (
            <div className='myCinema'>
                <Branch />
                <div className='container'>
                    {this.renderCinema()}
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