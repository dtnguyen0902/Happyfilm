import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import BookingItems from '../Booking/BookingItems';

class Booking extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailBooking(id);
    }
    renderSource = () => {
        if (this.props.Booking.danhSachGhe) {
            return this.props.Booking.danhSachGhe.map((item, index) => {
                if (item.daDat) {
                    return (
                        <div className="card bookingVebg" style={{ width: '6rem' }} key={index}>
                            <div className="list-group list-group-flush bookingVe ">
                                <button className="bookingVedis list-group-item " disabled>{item.tenGhe}</button>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="card bookingVebg " style={{ width: '6rem' }} key={index}>
                            <div className="list-group list-group-flush bookingVe ">
                                <button className="list-group-item bookingVeactive">{item.tenGhe}</button>
                            </div>
                        </div>
                    )
                }
            })
        }
        // }
    }

    renderItem = () => {
        let { Booking } = this.props;
        console.log(Booking.thongTinPhim)
        if (Booking.thongTinPhim) {
            return (
                <div className="card bookingVebgposition" style={{ width: '18rem' }}>
                    <img src={Booking.thongTinPhim.hinhAnh} className="card-img-top" alt="..." height={320}/>
                    <div className="card-body">
                        <h4 className="card-title">{Booking.thongTinPhim.tenPhim}</h4>
                        <h6 className="card-text">Rạp: {Booking.thongTinPhim.tenCumRap} | {Booking.thongTinPhim.tenRap}</h6>
                        <p>Địa chỉ: {Booking.thongTinPhim.diaChi}</p>
                        <h6>Ngày chiếu: {new Date(Booking.thongTinPhim.ngayChieu).toLocaleDateString('en-GB')}</h6>
                        <h6>Giờ chiếu: {(Booking.thongTinPhim.gioChieu)}</h6>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-8'>
                        <div className='row'>
                            {this.renderSource()}
                        </div>
                    </div>
                    <div className='col-4 pr-0'>
                        {this.renderItem()}
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        detailBooking: id => {
            dispatch(action.actListBookingAPI(id));
        }
    }
}
const mapStateToProps = state => {
    return {
        Booking: state.ThongTinrapReducer.Booking
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Booking);