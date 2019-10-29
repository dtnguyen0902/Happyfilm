import React, { Component } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import Axios from 'axios'
import OptionRap from './Optionrap';

class FormRap extends Component {
    renderForm = () => {
        let { ListRaps } = this.props;
        return ListRaps.map((item, index) => {
            return <OptionRap key={index} optionRap={item} />
        })
    }
    componentDidMount() {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
            .then(result => {
                this.props.layThongTinrap(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="form-group">
                <select className="custom-select" name="" id="selectenPhim">
                    <option selected='Chọn phim'>Chọn rạp</option>
                    {this.renderForm()}
                </select>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layThongTinrap: ListRap => {
            dispatch(action.layThongTinrap(ListRap))
        }
    }
}
const mapStateToProps = state => {
    return {
        ListRaps: state.ThongTinrapReducer.ListRaps
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRap);