import React, { Component } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import Axios from 'axios';
import CumRap from './CumRap';
import OptionNgay from './OptionNgay';

class FormNgay extends Component {
    render() {
        return (
            <div className="form-group">
                <select className="custom-select" name="" id="selectenPhim">
                    <option selected='Chọn phim'>Chọn ngày</option>
                </select>
            </div>
        );
    }
}

export default connect(null, null)(FormNgay);