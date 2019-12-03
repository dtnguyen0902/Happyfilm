import React, { Component } from 'react';
import ListBranch from '../Branch-cinema/ListBranch';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import ChooseCinema from '../ListPhim/ChooseCinema';

class LichChieuCinemaMovie extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isChoosenCinema: ''
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.detailCinemaMovie(nextProps.match.params.id)
            window.scrollTo(0, 0)
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailCinemaMovie(id);
        window.scrollTo(0, 0)
    }
    handleChoosen = (e) => {
        this.setState({
            isChoosenCinema: e.target.value
        })
        console.log(this.state)
    }
    
    renderCinemaMovie = () => {
        let { CinemaMovie } = this.props;
        if (CinemaMovie.heThongRapChieu) {
            return CinemaMovie.heThongRapChieu.map((item, index) => {
                return (
                    <div key={index}>
                        <div className='row'>
                            <div>{item.cumRapChieu.map((item, index) => {
                                return (
                                    <div className="card bg-dark" style={{ width: '18rem' }} key={index}>
                                        <ul className="list-group list-group-flush lichChieuCinema ">
                                            <button className="list-group-item lichChieuCinema" onClick={this.handleChoosen} value={item.tenCumRap}>{item.tenCumRap}</button>
                                        </ul>
                                    </div>)
                            })}
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }

    render() {
        return (
            <div className='container-fluid' >
                <div className='row'>
                    <div className='col-3 px-0'>
                        <ListBranch />
                    </div>
                    <div className='col-3 px-5'>
                        <ul className="nav nav-pills container myBranch" id="pills-tab" role="tablist">
                            <li className="nav-item myBranch">
                                <a className="nav-link active myBranch" id="pills-home-tab" data-toggle="pill" href="#chonPhim" role="tab" aria-controls="pills-home" aria-selected="true">CHỌN RẠP</a>
                            </li>
                        </ul>
                        {this.renderCinemaMovie()}
                    </div>
                    <div className='col-6'>
                        <ChooseCinema isChoosenCinema={this.state.isChoosenCinema}/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        detailCinemaMovie: id => {
            dispatch(action.actLichChieuPhimAPI(id));
        }
    }
}
const mapStateToProps = state => {
    return {
        CinemaMovie: state.ThongTinrapReducer.CinemaMovie
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LichChieuCinemaMovie);