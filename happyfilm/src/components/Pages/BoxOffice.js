import React, { Component } from 'react';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import Skeleton from 'react-loading-skeleton';


class BoxOffice extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isBoxOffice: false,
<<<<<<< HEAD
            dsGhe: [],
            dsGheDangDat: [],
            tongTien: 0
=======
            total: 0
>>>>>>> master
        })
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailBoxOffice(id);
        window.scrollTo(0, 0)
    }
    //sự kiện chọn chỗ ngồi
    handleSelectBoxOffice = (e, item) => {
        e.preventDefault();
<<<<<<< HEAD
        let { dsGhe, dsGheDangDat } = this.state;
        console.log(e.target.value);
        console.log('ghe =', item);
        // dò tìm trong mảng ban đầu, set lại trạng thái 
        let index = dsGhe.findIndex(x => x.maGhe === item.maGhe);
        if (index !== -1) {
            dsGhe[index].daDat = !dsGhe[index].daDat;
            if (dsGhe[index].daDat) {
                dsGheDangDat.push(dsGhe[index]);
        
            } else {
                let findGheCanXoa = dsGheDangDat.findIndex(y => y.maGhe === dsGhe[index].maGhe);
                findGheCanXoa !== -1 && dsGheDangDat.splice(findGheCanXoa, 1);
                

            }
        }


        this.setState({
            ...dsGhe,
            dsGheDangDat,
            tongTien: this.TongTien()
        })

=======
        this.setState({
            total: + e.target.value
        })
>>>>>>> master
    }
    // Tính tổng
     TongTien() {
        let sum=0;
        for(let i=0;i<this.state.dsGheDangDat.length;i++){
            sum+=this.state.dsGheDangDat[i].giaVe;
        }     
        return sum;   
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.dSachLichChieu !== nextProps.dSachLichChieu) {
            this.setState({ dsGhe: nextProps.dSachLichChieu.danhSachGhe })
        }
    }
    renderSource = () => {
        if (this.state.dsGhe.length > 0) {
            

            return this.state.dsGhe.map((item, index) => {
                return (
                    <div className="card bookingVebg " style={{ width: '6rem' }} key={index}>
                        <div className="list-group list-group-flush bookingVe ">
                            <button className={item.daDat === true ? 'btn btn-danger' : 'list-group-item bookingVeactive'
                            } onClick={(e) => this.handleSelectBoxOffice(e, item)}>{item.tenGhe || <Skeleton />}</button>
                        </div>
                    </div>
                )
            })
        }
    }

    renderItem = () => {
      
        let { dSachLichChieu } = this.props;
        if (dSachLichChieu.thongTinPhim) {
            return (
                <div className="card bookingVebgposition" style={{ width: '18rem',height:"60%",position:"relative" }}>
                    <img src={dSachLichChieu.thongTinPhim.hinhAnh} className="card-img-top" alt="..." height={320} />
                    <div className="card-body">
                        <h4 className="card-title">{dSachLichChieu.thongTinPhim.tenPhim || <Skeleton />}</h4>
                        <h6 className="card-text">Rạp: {dSachLichChieu.thongTinPhim.tenCumRap || <Skeleton />} | {dSachLichChieu.thongTinPhim.tenRap || <Skeleton />}</h6>
                        <p>Địa chỉ: {dSachLichChieu.thongTinPhim.diaChi || <Skeleton />}</p>
                        <h6>Ngày chiếu: {new Date(dSachLichChieu.thongTinPhim.ngayChieu).toLocaleDateString('en-GB') || <Skeleton />}</h6>
                        <h6>Danh Sach Ghe dang dat :</h6>
                        {this.state.dsGheDangDat.map((item, index) => (
                            <div>
                                {item.tenGhe + ' = ' + item.giaVe}
                            </div>
                        ))}
                        <h6>Giờ chiếu: {(dSachLichChieu.thongTinPhim.gioChieu) || <Skeleton />}</h6>
<<<<<<< HEAD
                       
                        <h2>Tổng:{this.state.tongTien} </h2>
                        <button type="button" className="btn btn-success text-center" style={{width:"100%"}}>ĐẶT VÉ</button>
=======
                        <h2>Tổng: {dSachLichChieu.danhSachGhe.reduce((total, item) => total += item.giaVe, 0)}
                        </h2>
>>>>>>> master
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
<<<<<<< HEAD
            <>
                <div className='container my-4'>
                    <div className='row'>
                        <div className='col-8 row'>
                            {this.renderSource() || <Skeleton />}
                        </div>
                        <div className='col-4 pr-0'>
                            {this.renderItem() || <Skeleton count={20} />}
                        </div>
=======
            <div className='container my-4'>
                <div className='row'>
                    <div className='col-8 row'>
                        {this.renderSource() || <Skeleton />}
                    </div>
                    <div className='col-4 pr-0'>
                        {this.renderItem() || <Skeleton count={20} />}
>>>>>>> master
                    </div>
                </div>
            </>
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
export default connect(mapStateToProps, mapDispatchToProps)(BoxOffice);