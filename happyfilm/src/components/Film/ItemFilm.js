import React, { Component } from 'react';
import itemFilm from './itemFilm.css'

class ItemFilm extends Component {
    render() {
        return (
            <div className="card" style={{width: '12rem'}}>
  <img src="./img/that-son-tam-linh-c18-15691692077045_215x318.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className=" card-title">Thất Sơn Tâm Linh - Kumanthong(C18)</h5>
    <p className="card-text">102 phút</p>
  </div>
  <div className="card__info">
    <div className="card__rating">
      <span>C18</span>
      <span>
        <p>8.3</p> 
        <p>
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
        </p>
      </span>
    </div>
    <div className="card__content">
      <div className="card__play">
        <i className="fas fa-play" />
      </div>
      <div className="card__button">
        <button type="button" className="btn btn-danger btn-block">Mua Vé</button>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default ItemFilm;