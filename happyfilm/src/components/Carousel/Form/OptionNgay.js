import React, { Component, Fragment } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import DetailDate from './Date/DetailDate';
class OptionNgay extends Component {

    renderCinema = () => {
        if (this.props.CinemaMovie.heThongRapChieu) {
            return this.props.CinemaMovie.heThongRapChieu.map((item, index) => {
                return (
                    <Fragment key={index}>
                        {item.cumRapChieu.map((item, index) => {
                            return <Fragment key={index}>
                                {item.lichChieuPhim.map((item, index) => {
                                    return <Fragment key={index}>
                                        <option>{(new Date(item.ngayChieuGioChieu).toLocaleDateString()) }</option>
                                    </Fragment>
                                })}
                            </Fragment>
                        })}
                    </Fragment>
                )
            })
        }
    }
    getUnique = (arr,key) => {
        return [...new Map(arr.map(item => [item[key],item]).value())]
    }
    render() {
        
        return (
            <Fragment>
                <div className="form-group">
                    <select className="custom-select" name="" id="selectenPhim">
                        <option selected='Chọn phim'>Chọn ngày</option>
                        <Fragment>
                        {this.renderCinema()}
                        </Fragment>
                    </select>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        CinemaMovie: state.ThongTinrapReducer.CinemaMovie
    }
}


export default connect(mapStateToProps, null)(OptionNgay);