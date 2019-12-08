import React, { Component } from 'react';
import promotion1 from '../../img/promotion1.jpg';
import promotion2 from '../../img/promotion2.jpg';
import promotion3 from '../../img/promotion3.jpg';
import promotion4 from '../../img/promotion4.jpg';
import _promotion from '../../SASS/Components/Promotion/_promotion.scss';
class Promotion extends Component {
    render() {
        return (
            <div className="container">
                <ul className="nav nav-pills container myPromotion" id="pills-tab" role="tablist">
                    <li className="nav-item myPromotion">
                        <a className="nav-link active myPromotion" id="pills-home-tab" data-toggle="pill" role="tab">TIN KHUYẾN MÃI</a>
                    </li>
                </ul>
                <div className='row'>
                    <div className='items-overlay'>
                        <div className='items'>
                            <div className="col-12 col-md-3 promotionImg">
                                <img src={promotion1} alt="promotion_1" />
                            </div>
                        </div>
                    </div>
                    <div className='items'>
                        <div className="col-12 col-md-3 promotionImg">
                            <img src={promotion2} alt="promotion_2" />
                        </div>
                    </div>
                    <div className='items'>
                        <div className="col-12 col-md-3 promotionImg">
                            <img src={promotion3} alt="promotion_3" />
                        </div>
                    </div>
                    <div className='items'>
                        <div className="col-12 col-md-3 promotionImg">
                            <img src={promotion4} alt="promotion_4" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Promotion;