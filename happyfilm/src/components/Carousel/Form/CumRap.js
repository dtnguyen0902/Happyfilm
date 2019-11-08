import React, { Component } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import Axios from 'axios';
import OptionNgay from './OptionNgay';

class CumRap extends Component {

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



export default connect(null, null)(CumRap);