import React, { Component, Fragment } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import FormNgay from './FormNgay';
import OptionNgay from './OptionNgay'
class FormCumRap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelect: this.props.isSelect,
        }
    }
    
    componentWillReceiveProps(nextprops) {
        if (nextprops.isSelect !== this.props.isSelect) {
            this.props.formCinemaMovie(nextprops.isSelect)
        }   
    }
    componentDidMount() {
        this.props.formCinemaMovie(this.props.isSelect)
    }
    //lấy danh sách rạp
    renderSource = () => {
        if (this.props.CinemaMovie.heThongRapChieu) {
            return this.props.CinemaMovie.heThongRapChieu.map((item, index) => {
                return (
                    <Fragment key={index}>
                        <Fragment>
                            {item.cumRapChieu.map((item, index) => {
                                return <Fragment key={index}>
                                    <option>{item.tenCumRap}</option>
                                </Fragment>
                            })}
                        </Fragment>
                    </Fragment>
                )
            })
        }
    }
    //lấy đối tượng

    renderObj = () => {
        if (this.props.CinemaMovie.heThongRapChieu) {
            return this.props.CinemaMovie.heThongRapChieu.map((item, index) => {
                return (
                    <Fragment key={index}>
                        {item.cumRapChieu.map((item, index) => {
                            return <Fragment key={index}>
                                <OptionNgay isDate={item} />
                            </Fragment>
                        })}</Fragment>
                )
            })
        }
    }
    //function deleteduplicate
    //lấy ngày chiếu
    renderDate = () => {
        if (this.props.CinemaMovie.heThongRapChieu) {
            return this.props.CinemaMovie.heThongRapChieu.map((item, index) => {
                return (
                    <Fragment key={index}>
                        {item.cumRapChieu.map((item, index) => {
                            return <Fragment key={index}>
                                {item.lichChieuPhim.map((item, index) => {
                                    return <Fragment key={index}>
                                        <option>{(item.ngayChieuGioChieu)}</option>
                                    </Fragment>
                                })}
                            </Fragment>
                        })}
                    </Fragment>
                )
            })
        }
    }
    //lấy giờ chiếu
    renderTime = () => {
        if (this.props.CinemaMovie.heThongRapChieu) {
            return this.props.CinemaMovie.heThongRapChieu.map((item, index) => {
                return (
                    <Fragment key={index}>
                        {item.cumRapChieu.map((item, index) => {
                            return <Fragment key={index}>
                                {item.lichChieuPhim.map((item, index) => {
                                    return <Fragment key={index}>
                                        <option>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</option>
                                    </Fragment>
                                })}
                            </Fragment>
                        })}
                    </Fragment>
                )
            })
        }
    }
    render() {
        return (
            <Fragment>
                <div className="form-group">
                    <select className="custom-select" name="" id="selectenPhim">
                        <option selected='Chọn phim'>Chọn rạp</option>
                        {this.renderSource()}

                    </select>
                </div>
                <div className="form-group">
                    <select className="custom-select" name="" id="selectenPhim">
                        <option selected='Chọn phim'>Chọn ngày</option>
                        {this.renderObj()}
                    </select>
                </div>
                <div className="form-group">
                    <select className="custom-select" name="" id="selectenPhim">
                        <option selected='Chọn phim'>Chọn giờ</option>
                        {this.renderTime()}
                    </select>
                </div>
            </Fragment>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        formCinemaMovie: id => {
            dispatch(action.actLichChieuPhimAPI(id));
        }
    }
}
const mapStateToProps = state => {
    return {
        CinemaMovie: state.ThongTinrapReducer.CinemaMovie
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormCumRap);