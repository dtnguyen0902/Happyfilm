import React, { Component } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import Axios from 'axios';
import CumRap from './CumRap';
import OptionNgay from './OptionNgay';

class FormNgay extends Component {
    renderForm = () => {
        let { ListLichChieus } = this.props;
        return ListLichChieus.map((item, index) => {
            return  <OptionNgay key={index} rap={item}/>
        })
    }
    componentDidMount() {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP04"
        })
            .then(result => {
                this.props.layThongTinLichChieu(result.data)
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
        layThongTinLichChieu: ListLichChieus => {
            dispatch(action.layThongTinLichChieu(ListLichChieus))
        }
    }
}
const mapStateToProps = state => {
    return {
        ListLichChieus: state.lichChieuReducer.ListLichChieus
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormNgay);