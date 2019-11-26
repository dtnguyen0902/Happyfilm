import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import _phimitems from '../../SASS/Components/Listphim/_phimitems.scss';


class PhimItemSearch extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    componentWillReceiveProps(){
            window.scrollTo(0, 0)
    }
    render() {
        let { movie } = this.props;
        return (
            <div className="card bg-dark" style={{ width: '18rem' }}>
                <ul className="list-group list-group-flush lichChieuCinema ">
                    <NavLink to={`/lich-chieu-theo-phim/${movie.maPhim}`} className="list-group-item lichChieuCinema">{movie.tenPhim}</NavLink>
                </ul>
            </div>
        );
    }
}

export default PhimItemSearch;
