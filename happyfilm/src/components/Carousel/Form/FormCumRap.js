import React, { Component, Fragment } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import OptionNgay from './OptionNgay';

class FormCumRap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelect: this.props.isSelect
        }
    }
    componentWillReceiveProps(nextprops) {
        if ((nextprops.isSelect !== this.props.isSelect)) {
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
                        {item.cumRapChieu.map((item, index) => {
                            return <Fragment key={index}>
                                <option value={item}>{item.tenCumRap}</option>
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
                    <select className="custom-select" name="" id="selectenPhim" ref="cinema">
                        <option selected='Chọn phim'>Chọn rạp</option>
                        <Fragment>
                            {this.renderSource()}
                        </Fragment>
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