import React, { Component } from 'react';
import *as  action from './../../redux/action/Action';
import { connect } from 'react-redux';
import { Trail } from 'react-spring/renderprops'
import { useSpring, animated } from 'react-spring'
import { Spring,config } from 'react-spring/renderprops'
class DetailMovie extends Component {
    state = {
        loading: false
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        setTimeout(this.props.detailMovie(id), 1000)
    }
    renderTable = () => {
        let { movie } = this.props
        new Date("2019-01-02T14:10:00").toLocaleTimeString();

        if (movie.lichChieu) {
            return movie.lichChieu.map((item, index) => {
                return (

                    <Trail items={items} keys={item.key} from={{ transform: 'translate3d(0,-40px,0)' }} to={{ transform: 'translate3d(0,0px,0)' }}>
                        {item => props => <span style={props}>
                            <tr>
                                <td>{item.thongTinRap.tenCumRap}</td>
                                <td>{item.thongTinRap.tenRap}</td>
                                <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
                                <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
                            </tr>
                        </span>}
                    </Trail>

                );
            })
        }

    }

    render() {
        let { movie } = this.props;

        return (
            <Spring from={{ number: 0 }} to={{ number: 100 }} config={config.slow}>
                {props => (<div style={{ width: props.number + "%" }}>
                    <div className="detail_movie container" style={{ props }}>
                        <div className="row">
                            <div className="col-md-6">
                                <img src={movie.hinhAnh} />
                            </div>
                            <div className="col-md-6">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td >Ten Phim</td>
                                            <td>{movie.tenPhim}</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td > Mo Ta</td>
                                            <td>{movie.moTa}</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Cum Rap</th>
                                            <th>Ten Rap</th>
                                            <th>Ngay Chieu</th>
                                            <th>Gio Chieu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading && <i className='fa fa-refresh fa-sipn'></i>}
                                        {this.renderTable()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>)}
            </Spring>
        );
    }
}


const mapStateToProps = state => {
    return {
        movie: state.movieReducer.movie
    }


}

const mapDispatchToProps = dispatch => {
    return {
        detailMovie: (id) => {
            dispatch(action.actDetailMovieAPI(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);

