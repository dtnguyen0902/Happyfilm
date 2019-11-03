import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import queryString from 'query-string';


class LocationCinema extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        console.log(this.props)
        this.props.detailCinema(id);
        
    }
    renderCinema = () => {
        return this.props.Cinema.map((item, index) => {
            return (
                <tr key={index}>
                    <td>
                        {item.tenHeThongRap}
                    </td>
                    <td>
                        {item.lstCumRap.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.danhSachPhim.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.tenCumRap}</td>
                                                <td>{item.diaChi}</td>
                                                <td>
                                                    {item.lstLichChieuTheoPhim.map((item, index2) => {
                                                        
                                                        return (
                                                            <tr key={index2}>
                                                                <td>{item.tenRap}</td>
                                                                <td>{item.giaVe}</td>
                                                                <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                                                                <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </td>
                                </tr>
                            )
                        })}
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderCinema()}
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        detailCinema: id => {
            dispatch(action.actListRapHeThongAPI(id));
        }
    }
}
const mapStateToProps = state => {
    return {
        Cinema: state.ThongTinrapReducer.Cinema
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationCinema);