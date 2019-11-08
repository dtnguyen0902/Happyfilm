import React, { Component } from 'react';
import { connect } from "react-redux";


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