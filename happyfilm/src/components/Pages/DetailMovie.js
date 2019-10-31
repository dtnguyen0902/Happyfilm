import React, { Component } from 'react';
import ManagerFooter from '../Footer/ManagerFooter';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchPhim from '../Carousel/Form/SearchPhim';

class DetailMovie extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailMovie(id);
    }
    renderTable = () => {
        let { movie } = this.props;
        if (movie.lichChieu) {
            return movie.lichChieu.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.thongTinRap.tenCumRap}</td>
                        <td>{item.thongTinRap.tenRap}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                        <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                        <td>
                            <NavLink className="btn btn-success" to="">
                                Mua ve</NavLink>
                        </td>
                    </tr>
                )
            })
        }
    }
    render() {
        let { movie } = this.props;
        console.log(movie)
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-8'>
                            <div className='row'>
                                <div className='col-6'>
                                    <img src={movie.hinhAnh} alt="" />
                                </div>
                                <div className='col-6'>
                                    <table className='table'>
                                        <tbody className='text-warning'>
                                            <tr>
                                                {movie.tenPhim}
                                            </tr>
                                            <tr>   
                                                Nội dung phim: {movie.moTa}
                                            </tr>
                                            <tr>
                                                Khởi chiếu: {new Date(movie.ngayKhoiChieu).toLocaleDateString()}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <table className="table">
                                <thead>
                                    <tr className='text-warning' >
                                        <td>Cụm rạp</td>
                                        <td>Tên Rạp</td>
                                        <td>Ngày chiếu</td>
                                        <td>Giờ chiếu</td>
                                    </tr>
                                </thead>
                                <tbody className='text-warning'>{this.renderTable()}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <ManagerFooter />
            </div>
        );
    }
}
const mapDispatchToProp = dispatch => {
    return {
        detailMovie: id => {
            dispatch(action.actDetailMovieAPI(id));
        }
    }
}
const mapStateToProps = state => {
    return {
        movie: state.movieReducer.movie
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(DetailMovie);