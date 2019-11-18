import React, { Component } from "react";
import _phimitems from '../../SASS/Components/Listphim/_phimitems.scss';


class PhimItemsNavbar extends Component {
    render() {
        let { movie } = this.props;

        return (
            <div className="myPhim col-12 col-md-3 py-3" >
                <div className="myCardNavbar card border-0 my-2">
                    <img className="myPhimImg card-img-top" width='100%' height={200} src={movie.hinhAnh} alt={movie.tenPhim} />
                    <div className="card-body">
                        <h6 className="myPhim__Name card-title">{movie.tenPhim}</h6>
                        <p className='myPhim_moTaNavbar'>{movie.moTa}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhimItemsNavbar;
