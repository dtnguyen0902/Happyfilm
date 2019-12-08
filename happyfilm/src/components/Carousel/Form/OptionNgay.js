import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
class OptionNgay extends Component {

    renderCinema = () => {
        if (this.props.CinemaMovie.heThongRapChieu) {
            return this.props.CinemaMovie.heThongRapChieu.map((item, index) => {
                return (
                    <Fragment key={index}>
                        {item.cumRapChieu.map((item, index) => {
                            return <Fragment key={index}>
                                {item.lichChieuPhim.map(item => item['ngayChieuGioChieu'])}
                            </Fragment>
                        })}
                    </Fragment>
                )
            })
        }
    }

    render() {
        console.log(this.renderCinema())
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