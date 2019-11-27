import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import _phimitems from '../../SASS/Components/Listphim/_phimitems.scss';

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
            <div className="card__content myMovieNavlink">
              <div className="card__button">
                <div className='row'>
                  <NavLink className='btn btn-info myNavlink' to={`/chi-tiet-phim/${movie.maPhim}`}>Xem chi tiết</NavLink>
                  <NavLink type="button" className="btn btn-danger btn-block myNavlink" to={`lich-chieu-theo-phim/${movie.maPhim}`}>Mua Vé</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default PhimItems;
