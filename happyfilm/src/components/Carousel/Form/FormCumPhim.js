import React, { Component, Fragment } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";

class FormCumPhim extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isSelect: this.props.isSelect
        })
    }
    componentWillReceiveProps(nextprops) {
        if (nextprops.isSelect !== this.props.isSelect) {
            this.props.formFilmMovie(nextprops.isSelect);
        }
    }
    componentDidMount() {
        this.props.formFilmMovie(this.props.isSelect)
    }
    //láy địa chỉ rạp
    renderLocation = () => {
        if (this.props.Cinema !== '') {
            return this.props.Cinema.map((item, index) => {
                return <Fragment key={index}>
                    {item.lstCumRap.map((item, index) => {
                        return <Fragment key={index}>
                            <option>{item.tenCumRap}</option>
                        </Fragment>
                    })}
                </Fragment>
            })
        }
    }
    //lấy danh sách phim
    renderFilm = () => {
        if (this.props.Cinema !== '') {
            return this.props.Cinema.map((item, index) => {
                return <Fragment key={index}>
                    {item.lstCumRap.map((item, index) => {
                        return <Fragment key={index}>
                            {item.danhSachPhim.map((item, index) => {
                                return <Fragment key={index}>
                                    <option>{item.tenPhim}</option>
                                </Fragment>
                            })}
                        </Fragment>
                    })}
                </Fragment>
            })
        }
    }
    //lấy lịch chiếu theo rap
    renderDate = () => {
        if (this.props.Cinema !== '') {
            return this.props.Cinema.map((item, index) => {
                return <Fragment key={index}>
                    {item.lstCumRap.map((item, index) => {
                        return <Fragment key={index}>
                            {item.danhSachPhim.map((item, index) => {
                                return <Fragment key={index}>
                                    {item.lstLichChieuTheoPhim.map((item, index) => {
                                        return <Fragment key={index}>
                                            <option>{item.ngayChieuGioChieu}</option>
                                        </Fragment>
                                    })}
                                </Fragment>
                            })}
                        </Fragment>
                    })}
                </Fragment>
            })
        }
    }


    render() {
        return (
            <Fragment>
                <div className="form-group">
                    <select className="custom-select" name="" id="selectenPhim">
                        <option selected='Chọn phim'>Chọn địa chỉ rạp</option>
                        {this.renderLocation()}
                    </select>
                </div>
                <div className="form-group">
                    <select className="custom-select" name="" id="selectenPhim">
                        <option selected='Chọn phim'>Chọn phim</option>
                        {this.renderFilm()}
                    </select>
                </div>
                <div className="form-group">
                    <select className="custom-select" name="" id="selectenPhim">
                        <option selected='Chọn phim'>Chọn suất</option>
                        {this.renderDate()}
                    </select>
                </div>
            </Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        formFilmMovie: id => {
            dispatch(action.actLichChieuRapAPI(id));
        }
    }
}
const mapStateToProps = state => {
    return {
        Cinema: state.ThongTinrapReducer.Cinema
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormCumPhim);