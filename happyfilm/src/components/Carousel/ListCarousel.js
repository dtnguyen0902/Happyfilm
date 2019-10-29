import React, { Component } from "react";
import Axios from 'axios';
import Carousel from './Carousel';
import * as action from '../../redux/action/Action';
import { connect } from "react-redux";
import _carousel from '../../SASS/Components/Carousel/_carousel.scss'
import SearchPhim from "./Form/SearchPhim";
import Liitem from "./Liitem";

class ListCarousel extends Component {
    renderTrailer = () => {
        let { ListFilms } = this.props;
        return ListFilms.map((item, index) => {
            if (index < 1) {
                return <Carousel key={index} carousel={item} className="carousel-item active" />
            }
        })
    }
    renderLi = () => {
        let { ListFilms } = this.props;
        return ListFilms.map((item,index) => {
            return <Liitem data-target="#myCarousel" key={index} carousel={item}></Liitem>
        })
    }

    componentDidMount() {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
            .then(result => {
                this.props.layDuLieu(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        return (
            <div id="myCarousel" className="myCarousel carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    {this.renderLi()}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {this.renderTrailer()}
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <SearchPhim />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        layDuLieu: ListFilms => {
            dispatch(action.layDuLieu(ListFilms))
        }
    }
}
const mapStateToProps = state => {
    return {
        ListFilms: state.movieReducer.ListFilms
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCarousel);