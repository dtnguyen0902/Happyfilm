import React, { Component, Fragment } from 'react';
import _search from '../../SASS/Function/_search.scss';
import { connect } from 'react-redux';
import * as action from "../../redux/action/Action";
import { NavLink } from "react-router-dom";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isCheck: true
        }
    }
    handlerOnChange = (e) => {
        if(e.target.value === ""){
            this.setState({
                value: "",
                isCheck: true
            })
        }else{
            this.setState({
                value: e.target.value,
                isCheck: false
            })
        }
        
    }

    handlerOnSubmit = (e) => {
        e.preventDefault();
    }

    renderSource = () => {
        return this.props.ListFilms.map((item, index) => {
            return <NavLink to={`/lich-chieu-theo-phim/${item.maPhim}`}>
                <li key={index} style={{ display: this.state.isCheck ? "none" : "contents", color: "black" }} className='LiSearch'>
                    <div className="card SearchCard">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={item.hinhAnh} className="card-img ImgSearch" alt={item.tenPhim} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h6 className="card-title">{item.tenPhim}</h6>
                                    <small className='myPhim_moTaSearch'>{item.moTa}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </NavLink>
        })
    }
    render() {
        return (
            <Fragment>
                <div className="container mx-auto">
                    <form onSubmit={this.handlerOnSubmit}>
                        <input
                            className="mySearch form-control"
                            type="search"
                            placeholder="Tìm kiếm phim"
                            aria-label="Search" value={this.state.value}
                            onChange={this.handlerOnChange} onKeyUp={(event) => this.props.onFilter(event.target.value)}
                        />
                    </form>
                </div>
                <ul className='UlSearch'>
                    {this.renderSource()}
                </ul>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        ListFilms: state.movieReducer.ListFilms
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onFilter: (keyword) => {
            dispatch(action.actFilterMovie(keyword));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);


