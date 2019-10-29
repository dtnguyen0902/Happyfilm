import React, { Component } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import Axios from 'axios';
import OptionNgay from './OptionNgay';

class CumRap extends Component {
    renderForm = () => {
        let { CumRaps } = this.props;
        console.log(CumRaps)
       
    }
    componentDidMount() {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04"
        })
            .then(result => {
                this.props.layMaRap(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="form-group">
                <select className="custom-select" name="" id="selectenPhim">
                    <option selected='Chọn phim'>Chọn ngày</option>
                    {this.renderForm()}
                </select>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layThongTinLichChieu: CumRaps => {
            dispatch(action.layThongTinLichChieu(CumRaps))
        }
    }
}
const mapStateToProps = state => {
    return {
        CumRaps: state.lichChieuReducer.ListLichChieus.CumRaps
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CumRap);