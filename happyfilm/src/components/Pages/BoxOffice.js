import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import Skeleton from 'react-loading-skeleton';


class BoxOffice extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isBoxOffice: false,
            total: 0,
        })
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailBoxOffice(id);
        window.scrollTo(0, 0)
    }
    //sự kiện chọn chỗ ngồi
    handleSelectBoxOffice = (e) => {
        e.preventDefault();
        let arr = [];
        console.log(e.target)
    }
    renderSource = () => {
        if (this.props.dSachLichChieu.danhSachGhe) {
            return this.props.dSachLichChieu.danhSachGhe.map((item, index) => {
                if (item.daDat) {
                    return (
                        <div className="card bookingVebg" style={{ width: '6rem' }} key={index} onClick={this.handleSelectBoxOffice}>
                            <div className="list-group list-group-flush bookingVe ">
                                <button className="bookingVedis list-group-item">{item.tenGhe}</button>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div className="card bookingVebg " style={{ width: '6rem' }} key={index}>
                            <div className="list-group list-group-flush bookingVe ">
                                <button className="list-group-item bookingVeactive" onClick={this.handleSelectBoxOffice} value={item.giaVe}>{item.tenGhe}</button>
                            </div>
                        </div>
                    )
                }
            })
        }
        // }
    }

    renderItem = () => {
        let { dSachLichChieu } = this.props;
        if (dSachLichChieu.thongTinPhim) {
            return (
                <div className="card bookingVebgposition" style={{ width: '18rem' }}>
                    <img src={dSachLichChieu.thongTinPhim.hinhAnh} className="card-img-top" alt="..." height={320} />
                    <div className="card-body">
                        <h4 className="card-title">{dSachLichChieu.thongTinPhim.tenPhim}</h4>
                        <h6 className="card-text">Rạp: {dSachLichChieu.thongTinPhim.tenCumRap} | {dSachLichChieu.thongTinPhim.tenRap}</h6>
                        <p>Địa chỉ: {dSachLichChieu.thongTinPhim.diaChi || <Skeleton />}</p>
                        <h6>Ngày chiếu: {new Date(dSachLichChieu.thongTinPhim.ngayChieu).toLocaleDateString('en-GB')}</h6>
                        <h6>Giờ chiếu: {(dSachLichChieu.thongTinPhim.gioChieu)}</h6>
                        <h2>Tổng: {dSachLichChieu.danhSachGhe.reduce((total, item) => total += item.giaVe, 0)}
                        </h2>
                    </div>
                </div>
            )
        }
    }

    render() {
        if (this.props.loading !== 200) {
            return <div class="loader__wrap">
                <div className='loader'></div>
            </div>
        } else {
            return (
                <div className='container my-4'>
                    <div className='row'>
                        <div className='col-8 row'>
                            {this.renderSource()}
                        </div>
                        <div className='col-4 pr-0'>
                            {this.renderItem()}
                        </div>
                    </div>
                </div>
            );
        }

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
        dSachLichChieu: state.lichChieuReducer.dSachLichChieu,
        loading: state.lichChieuReducer.loading
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BoxOffice);