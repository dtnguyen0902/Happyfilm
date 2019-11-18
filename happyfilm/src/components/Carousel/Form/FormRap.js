import React, { Component, Fragment } from 'react';
import * as action from '../../../redux/action/Action';
import { connect } from "react-redux";
import FormCumPhim from './FormCumPhim';


class FormRap extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            optionCinema: ''
        })
    }
    selectCinema() {
        this.setState({
            optionCinema: this.refs.cinemaName.value
        })
    }

    componentDidMount() {
        this.props.layThongTinrap()
    }
    renderForm = () => {
        let { ListRaps } = this.props;
        return ListRaps.map((item, index) => {
            return <option key={index} value={item.maHeThongRap} isSelect={item}>{item.maHeThongRap}</option>
        })
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <select ref="cinemaName" className="custom-select" name="" id="selectenRap" onChange={(e) => { this.selectCinema() }}>
                        <option selected='Chọn phim'>Chọn rạp</option>
                        <Fragment>
                            {this.renderForm()}
                        </Fragment>
                    </select>
                </div>
                <div>
                <FormCumPhim isSelect={this.state.optionCinema} />
                </div>
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