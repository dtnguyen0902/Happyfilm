import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import _phimitems from '../../SASS/Components/Listphim/_phimitems.scss';
import {NavLink}  from "react-router-dom";


class PhimItems extends Component {
  render() {
    let { movie } = this.props;

    

    return (
      <div className="myPhim col-12 col-md-3 py-3" >
        <div className="myCard card border-0 my-2">
          <img className="myPhimImg card-img-top" width='100%' height={300} src={movie.hinhAnh} alt={movie.tenPhim} />
          <div className="card-body">
            <h6 className="myPhim__Name card-title">{movie.tenPhim}</h6>
            <p className='myPhim_moTa'>{movie.moTa}</p>
          </div>
          <div className="card__content">
            <div className="card__button">
<<<<<<< HEAD
            <NavLink className="btn btn-danger"  to={`/detail-movie/${movie.maPhim}`}>Chi Tiết</NavLink>

            
            </div>

            <div className="card__button">
            
          
            
=======
              <div className='row'>
                <div className='col-6'>
                  <NavLink className='btn btn-info' to={`/chi-tiet-phim/${movie.maPhim}`}>Xem chi tiết</NavLink>
                </div>
                <div className='col-6'>
                  <button type="button" className="btn btn-danger btn-block">Mua Vé</button>
                </div>
              </div>
>>>>>>> 6c2f398291e05d18d6ca35ab371f1095ce281d49
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhimItems;
