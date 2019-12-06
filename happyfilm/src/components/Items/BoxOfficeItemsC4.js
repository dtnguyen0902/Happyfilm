import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
class BoxOfficeItemsC4 extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div></div>
        );
    }
}
const mapDispatchToProps = disapatch => {
    return {
        detailBoxOffice: id => {
            disapatch(action.actDanhSachPhongVe(id))
        }
    }
}
const mapStateToProps = state => {
    return {
        dSachLichChieu: state.lichChieuReducer.dSachLichChieu
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BoxOfficeItemsC4);