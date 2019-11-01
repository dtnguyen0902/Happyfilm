import React, { Component } from "react";
import _phimitems from '../../SASS/Components/Listphim/_phimitems.scss';
import {NavLink}  from "react-router-dom";


class PhimItems extends Component {
  render() {
    let { movie } = this.props;

    

    return (
      <div className="myPhim col-12 col-md-3 d-table-cell py-3" >
        <div className="myCard card border-0">
          <img className="myPhimImg card-img-top" width='100%' height={300} src={movie.hinhAnh} alt={movie.tenPhim} />
          <div className="card-body">
            <h6 className="myPhim__Name card-title">{movie.tenPhim}</h6>
            <p className='myPhim_moTa'>{movie.moTa}</p>
          </div>
          <div className="card__content">
            <div className="card__button">
            <NavLink className="btn btn-danger"  to={`/detail-movie/${movie.maPhim}`}>Mua Ve</NavLink>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhimItems;
