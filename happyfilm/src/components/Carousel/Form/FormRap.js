import React, { Component } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import OptionRap from './Optionrap';

class FormRap extends Component {
    renderForm = () => {
        return this.props.ListRaps.map((item, index) => {
            return <OptionRap key={index} optionRap={item} />
        })
    }
    componentDidMount() {
        this.props.layThongTinrap()
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
        layThongTinrap: () => {
            dispatch(action.actListRapAPI())
        }
    }
}
const mapStateToProps = state => {
    return {
        ListRaps: state.ThongTinrapReducer.ListRaps
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRap);